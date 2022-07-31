import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

// Yup resolver
import { yupResolver } from "@hookform/resolvers/yup";

//formik
import { Formik, useFormik } from "formik";

import { movieSchema } from "@/validators";
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
import { SubmitButton } from "@/containers/AdminTemplate/MovieDashBoard/components/Button";
import moment from "moment";
import Image from "@/components/Image";
import MuiDatePicker from "@/components/MuiPicker";
import * as yup from "yup";
import msg from "@/validators/message";
import pattern from "@/validators/pattern";

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
  const { title, button, openModal, setOpenModal, movieId, modalType } = props;
  const [imgSrc, setImgSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [datePicker, setDatePicker] = useState(null);

  const dispatch = useDispatch();
  const handleClose = () => setOpenModal(false);

  const initialValues = {
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

  const addMovieSchema = yup.object({
    tenPhim: yup.string().required(msg.required),
    trailer: yup.string().required(msg.required).matches(pattern.url, msg.url),
    moTa: yup.string().required(msg.required),
    ngayKhoiChieu: yup.string().required(msg.required),
    dangChieu: yup.boolean().required(msg.required),
    sapChieu: yup.boolean().required(msg.required),
    hot: yup.boolean().required(msg.required),
    danhGia: yup.number().min(1, msg.rating).required(msg.required),
    hinhAnh: yup.mixed().required(msg.required),
  });
  const { errors, values, touched, setFieldValue, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        tenPhim: "",
      },
      validationSchema: addMovieSchema,
      onSubmit: (values) => {
        // values.maNhom = GROUP_ID;
        // let formData = new FormData();
        // for (var key in values) {
        //   if (key !== "hinhAnh") {
        //     formData.append(key, values[key]);
        //   } else {
        //     if (values.hinhAnh !== null) {
        //       formData.append("File", values.hinhAnh, values.hinhAnh.name);
        //     }
        //   }
        // }

        console.log("add ", values);

        //dispatch(actFetchMovieAdd(formData));
      },
    });

  console.log("errors ", errors);
  console.log("values ", values);

  const handleChangeDatePicker = (date) => {
    let ngayKhoiChieu = moment(date).format("DD/MM/YYYY");
    setDatePicker(date);
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
        open={openModal}
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
                  //   value={values.tenPhim}
                  id="movie-name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  //   value={values.trailer}
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
                  //   value={values.moTa}
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
                <Box fullWidth sx={{ my: 1, flexDirection: "row" }}>
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
                  />
                </Box>
                <FormHelperText error>{errors.ngayKhoiChieu}</FormHelperText>
              </FormControl>
              <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
                <FormLabel
                  className="movie-form__input-label"
                  htmlFor="movie-on-air"
                  sx={{ mr: 1 }}
                >
                  Đang chiếu
                </FormLabel>
                <Switch name="dangChieu" onClick={handleChangeSwitch("dangChieu")} />
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
                <Switch name="hot" onClick={handleChangeSwitch("hot")} />
                <FormHelperText>{errors.movimovieHotness?.message}</FormHelperText>
              </FormControl>
              <FormControl>
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
                    defaultValue={0}
                    max={10}
                    // value={values.danhGia}
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
                  <Image src={imgSrc} alt="..." className="modal__img" />
                  <FormHelperText error>{errors.hinhAnh}</FormHelperText>
                </Box>
              </FormControl>
              <Box sx={{ mt: 2 }}>
                <SubmitButton loading={loading}>{button}</SubmitButton>
              </Box>
            </Box>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

export default MovieModal;