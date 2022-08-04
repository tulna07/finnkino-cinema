import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//moment
import moment from "moment";

//formik
import { Formik, useFormik } from "formik";

import { editMovieSchema, addMovieSchema } from "@/validators";
import { actFetchMovieEdit, actFetchMovieAdd } from "@/store/actions/movieManagement";
import actFetchMovieDetails from "@/store/actions/movieDetails";
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
  Alert,
} from "@mui/material";
import MuiDatePicker from "@/components/MuiPicker";

//Components
import Loader from "@/components/Loader";
import { SubmitButton } from "../../../components/Buttons";
import Image from "@/components/Image";

//Others
import "./style.scss";
import { movieApi } from "@/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

function MovieModal(props) {
  const { openModalMovie, setOpenModalMovie, title, button, data, loading, movieId, modalType } =
    props;
  const [imgSrc, setImgSrc] = useState(null);
  const [serverError, setServerError] = useState("");

  const dispatch = useDispatch();
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
    tenPhim: data?.tenPhim,
    trailer: data?.trailer,
    moTa: data?.moTa,
    ngayKhoiChieu: data?.ngayKhoiChieu,
    dangChieu: data?.dangChieu,
    sapChieu: data?.sapChieu,
    hot: data?.hot,
    danhGia: data?.danhGia,
    hinhAnh: null,
  };

  let movieSchema = modalType === "addMovie" ? addMovieSchema : editMovieSchema;

  const fetchMovieAdd = async (formData, movieId) => {
    try {
      await movieApi.addMovie(formData);
      setOpenModalMovie(false);
      window.location.reload();
    } catch (error) {
      setServerError(error);
    }
  };

  const fetchMovieEdit = async (formData) => {
    try {
      await movieApi.editMovie(formData);
      setOpenModalMovie(false);
      document.location.reload();
    } catch (error) {
      setServerError(error);
    }
  };

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
          fetchMovieAdd(formData);
        } else if (modalType === "editMovie") {
          values.maPhim = movieId;
          fetchMovieEdit(formData);
        }
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
        {serverError ? (
          <Alert severity="error" sx={{ my: 3 }}>
            {serverError}
          </Alert>
        ) : (
          ""
        )}
        {loading ? (
          <Loader />
        ) : (
          <Formik>
            <Box sx={{ mt: 2 }} component="form" onSubmit={handleSubmit}>
              <FormControl fullWidth className="form__input-wrapper">
                <FormLabel className="movie-form__input-label" htmlFor="movie-name">
                  Tên phim
                </FormLabel>
                <TextField
                  name="tenPhim"
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
              <FormControl fullWidth className="form__input-wrapper">
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
                {errors.trailer && touched.trailer && (
                  <FormHelperText error>{errors.trailer}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth className="form__input-wrapper">
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
                {errors.moTa && touched.moTa && (
                  <FormHelperText error>{errors.moTa}</FormHelperText>
                )}
              </FormControl>
              <FormControl className="form__input-wrapper">
                <Box sx={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
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
                  {errors.ngayKhoiChieu && touched.ngayKhoiChieu && (
                    <FormHelperText error>{errors.ngayKhoiChieu}</FormHelperText>
                  )}
                </Box>
              </FormControl>
              <FormControl
                fullWidth
                className="form__input-wrapper"
                sx={{ flexDirection: "row", alignItems: "center" }}
              >
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
                {errors.dangChieu && touched.dangChieu && (
                  <FormHelperText>{errors.dangChieu}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                className="form__input-wrapper"
                sx={{ flexDirection: "row", alignItems: "center" }}
              >
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
                {errors.sapChieu && touched.sapChieu && (
                  <FormHelperText>{errors.sapChieu}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                className="form__input-wrapper"
                sx={{ flexDirection: "row", alignItems: "center" }}
              >
                <FormLabel
                  className="movie-form__input-label"
                  htmlFor="movie-hotness"
                  sx={{ mr: 1 }}
                >
                  Hot
                </FormLabel>
                <Switch name="hot" onClick={handleChangeSwitch("hot")} checked={values.hot} />
                {errors.hot && touched.hot && <FormHelperText>{errors.hot}</FormHelperText>}
              </FormControl>
              <FormControl
                className="form__input-wrapper"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <FormLabel
                    className="movie-form__input-label"
                    htmlFor="movie-hotness"
                    sx={{ mr: 1 }}
                  >
                    Đánh giá
                  </FormLabel>
                  <Rating
                    name="danhGia"
                    max={10}
                    value={values.danhGia || 0}
                    onChange={handleChangeNumberInput("danhGia")}
                    onBlur={handleBlur}
                    error={errors.danhGia && touched.danhGia ? "true" : undefined}
                  />
                </Box>
                {errors.danhGia && touched.danhGia && (
                  <FormHelperText error>{errors.danhGia}</FormHelperText>
                )}
              </FormControl>
              <FormControl className="form__input-wrapper">
                <Box sx={{ flexDirection: "row" }}>
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
                {errors.hinhAnh && touched.hinhAnh && (
                  <FormHelperText error sx={{ my: 1 }}>
                    {errors.hinhAnh}
                  </FormHelperText>
                )}
                <Image
                  src={imgSrc === null && modalType === "editMovie" ? data?.hinhAnh : imgSrc}
                  alt="..."
                  className="modal__img"
                />
              </FormControl>
              <Box sx={{ mt: 2 }}>
                <SubmitButton>{button}</SubmitButton>
              </Box>
            </Box>
          </Formik>
        )}
      </Box>
    </Modal>
  );
}

export default MovieModal;
