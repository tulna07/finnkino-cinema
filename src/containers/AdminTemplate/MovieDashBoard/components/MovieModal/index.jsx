import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

//moment
import moment from "moment";

// Yup resolver
import { yupResolver } from "@hookform/resolvers/yup";

//formik
import { Formik, useFormik } from "formik";

import "./style.scss";
import { editMovieSchema, addMovieSchema } from "@/validators";
import { actFetchMovieEdit, actFetchMovieAdd } from "@/redux/actions/movieManagement";
import actFetchMovieDetails from "@/redux/actions/movieDetails";
import { GROUP_ID } from "@/constants";

// Material UI
import {
  Box,
  Typography,
  Modal,
  FormControl,
  TextField,
  FormLabel,
  Switch,
  FormHelperText,
  Rating,
} from "@mui/material";
import MuiDatePicker from "@/components/MuiPicker";

//Others
import { SubmitButton } from "../../../components/Buttons";
import Image from "@/components/Image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

function MovieModal(props) {
  const { title, button, openModalMovie, setOpenModalMovie, movieId, modalType } = props;
  const [imgSrc, setImgSrc] = useState(null);
  const dispatch = useDispatch();
  const movieEdit = useSelector((state) => state.movieDetails.data);
  const loadingEditMovie = useSelector((state) => state.movieDetails.loading);

  const handleClose = () => setOpenModalMovie(false);

  const initialValuesAddMovie = {
    tenPhim: "",
    trailer: "",
    moTa: "",
    ngayKhoiChieu: "",
    dangChieu: false,
    sapChieu: false,
    hot: false,
    danhGia: 0,
    hinhAnh: "",
  };

  const initialValuesEditMovie = {
    maPhim: movieId,
    tenPhim: movieEdit?.tenPhim,
    trailer: movieEdit?.trailer,
    moTa: movieEdit?.moTa,
    ngayKhoiChieu: movieEdit?.ngayKhoiChieu,
    dangChieu: movieEdit?.dangChieu,
    sapChieu: movieEdit?.sapChieu,
    hot: movieEdit?.hot,
    danhGia: movieEdit?.danhGia,
    hinhAnh: null,
  };

  let movieSchema = modalType === "addMovie" ? addMovieSchema : editMovieSchema;

  const { errors, values, touched, setFieldValue, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: modalType === "addMovie" ? initialValuesAddMovie : initialValuesEditMovie,
      validationSchema: movieSchema,
      onSubmit: (values) => {
        values.maNhom = GROUP_ID;

        let formData = new FormData();
        for (var key in values) {
          if (key !== "hinhAnh") {
            formData.append(key, values[key]);
          } else {
            if (values.hinhAnh !== null) {
              formData.append("File", values.hinhAnh, values.hinhAnh.name);
            }
          }
        }

        if (modalType === "addMovie") {
          dispatch(actFetchMovieAdd(formData));
        } else if (modalType === "editMovie") {
          values.mapPhim = movieId;
          dispatch(actFetchMovieEdit(formData));
        }

        window.location.reload();
      },
    });

  useEffect(() => {
    if (movieId) {
      dispatch(actFetchMovieDetails(movieId));
    }
  }, [movieId]);

  const handleChangeDatePicker = (date) => {
    let ngayKhoiChieu = moment(date).format("DD/MM/YYYY");
    setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      setFieldValue(name, value.target.checked);
    };
  };

  const handleChangeNumberInput = (name) => {
    return (value) => {
      setFieldValue(name, value.target.value);
    };
  };

  const handleChangeFile = (e) => {
    let file = e.target.files[0];

    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };

      setFieldValue("hinhAnh", file);
    }
  };

  return (
    <div>
      <Modal
        open={openModalMovie}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="movie-modal">
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {title}
          </Typography>
          <Formik>
            <Box sx={{ mt: 2 }} component="form" onSubmit={handleSubmit}>
              <FormControl fullWidth sx={{ my: 1 }}>
                <FormLabel
                  className={`${
                    errors.tenPhim
                      ? "movie-form__error movie-form__input-label"
                      : "movie-form__input-label"
                  }`}
                  htmlFor="movie-name"
                >
                  Tên phim
                </FormLabel>
                <TextField
                  name="tenPhim"
                  value={values.tenPhim}
                  id="movie-name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tenPhim}
                  error={errors.tenPhim && touched.tenPhim ? true : false}
                />
                {errors.tenPhim && touched.tenPhim && (
                  <FormHelperText error>{errors.tenPhim}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth sx={{ my: 1 }}>
                <FormLabel className="movie-form__input-label" htmlFor="movie-trailer">
                  Trailer
                </FormLabel>
                <TextField
                  name="trailer"
                  value={values.trailer}
                  id="movie-trailer"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.trailer && touched.trailer ? true : false}
                />
                <FormHelperText error>{errors.trailer}</FormHelperText>
              </FormControl>
              <FormControl fullWidth sx={{ my: 1 }}>
                <FormLabel className="movie-form__input-label" htmlFor="movie-desc">
                  Mô tả
                </FormLabel>
                <TextField
                  name="moTa"
                  value={values.moTa}
                  id="movie-desc"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.movieDesc?.message}
                  error={errors.moTa && touched.moTa ? true : false}
                />
                <FormHelperText error>{errors.moTa}</FormHelperText>
              </FormControl>
              <FormControl>
                <Box
                  fullWidth
                  sx={{ my: 1, flexDirection: "row", display: "flex", alignItems: "center" }}
                >
                  <FormLabel
                    className="movie-form__input-label"
                    htmlFor="movie-release-date"
                    sx={{ mr: 1 }}
                  >
                    Ngày khởi chiếu
                  </FormLabel>

                  <MuiDatePicker
                    name="ngayKhoiChieu"
                    style={{ width: "fit-content" }}
                    onChange={handleChangeDatePicker}
                    onBlur={handleBlur}
                    inputFormat={"DD/MM/YYYY"}
                    value={values.ngayKhoiChieu || null}
                  />
                  <FormHelperText error>{errors.ngayKhoiChieu}</FormHelperText>
                </Box>
              </FormControl>
              <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
                <FormLabel
                  className="movie-form__input-label"
                  htmlFor="movie-on-air"
                  sx={{ mr: 1 }}
                >
                  Đang chiếu
                </FormLabel>
                <Switch
                  name="dangChieu"
                  onClick={handleChangeSwitch("dangChieu")}
                  checked={values.dangChieu}
                />
                <FormHelperText>{errors.momovieOnAir?.message}</FormHelperText>
              </FormControl>
              <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
                <FormLabel className="movie-form__input-label" sx={{ mr: 1 }}>
                  Sắp chiếu
                </FormLabel>
                <Switch
                  name="sapChieu"
                  label="Sắp chiếu"
                  onClick={handleChangeSwitch("sapChieu")}
                  onBlur={handleBlur}
                  inputProps={{ "aria-label": "controlled" }}
                  checked={values.sapChieu}
                />
                <FormHelperText>{errors.movimovieAirSoon?.message}</FormHelperText>
              </FormControl>
              <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
                <FormLabel
                  className="movie-form__input-label"
                  htmlFor="movie-hotness"
                  sx={{ mr: 1 }}
                >
                  Hot
                </FormLabel>
                <Switch name="hot" onClick={handleChangeSwitch("hot")} checked={values.hot} />
                <FormHelperText>{errors.movimovieHotness?.message}</FormHelperText>
              </FormControl>
              <FormControl sx={{ display: "flex", flexDirection: "row" }}>
                <Box
                  fullWidth
                  sx={{ my: 1, display: "flex", flexDirection: "row", alignItems: "center" }}
                >
                  <FormLabel
                    className="movie-form__input-label"
                    htmlFor="movie-hotness"
                    sx={{ mr: 1 }}
                  >
                    Đánh giá
                  </FormLabel>
                  <Rating
                    name="danhGia"
                    defaultValue={modalType === "addMovie" ? 0 : null}
                    max={10}
                    value={values.danhGia}
                    onChange={handleChangeNumberInput("danhGia")}
                    onBlur={handleBlur}
                    error={errors.danhGia && touched.danhGia ? "true" : undefined}
                  />
                </Box>
                <FormHelperText error>{errors.danhGia}</FormHelperText>
              </FormControl>
              <FormControl>
                <Box fullWidth sx={{ my: 1, flexDirection: "row" }}>
                  <FormLabel className="movie-form__input-label" htmlFor="movie-img" sx={{ mr: 1 }}>
                    Hình ảnh
                  </FormLabel>
                  <input
                    name="hinhAnh"
                    type="file"
                    accept="image/png, image/jpeg, image/gif, image/png"
                    onChange={handleChangeFile}
                    onBlur={handleBlur}
                  />
                </Box>
                <FormHelperText error>{errors.hinhAnh}</FormHelperText>
                <Image
                  src={imgSrc === null && modalType === "editMovie" ? movieEdit?.hinhAnh : imgSrc}
                  alt="..."
                  className="modal__img"
                />
              </FormControl>
              <Box sx={{ mt: 2 }}>
                <SubmitButton>{button}</SubmitButton>
              </Box>
            </Box>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

export default MovieModal;
