import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// Yup resolver
import { yupResolver } from "@hookform/resolvers/yup";

//formik
import { Formik, useFormik } from "formik";

import "./style.scss";
import { movieSchema } from "@/validators";
import { actFetchMovieEdit, actFetchMovieAdd } from "@/redux/actions/movieManagement";

// Material UI
import {
  Box,
  Typography,
  Modal,
  FormControl,
  TextField,
  FormLabel,
  Switch,
  FormControlLabel,
  FormHelperText,
  Rating,
} from "@mui/material";
import Button from "../Button";
import moment from "moment";
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
  const { title, button, openModal, setOpenModal, data } = props;

  const [imgSrc, setImgSrc] = useState(null);
  const dispatch = useDispatch();
  const handleClose = () => setOpenModal(false);

  const { errors, values, touched, setFieldValue, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        tenPhim: "",
        trailer: "",
        moTa: "",
        ngayKhoiChieu: "",
        dangChieu: false,
        sapChieu: false,
        hot: false,
        danhGia: 0,
        hinhAnh: {},
      },
      validationSchema: movieSchema,
      onSubmit: (values) => {
        console.log("values ", values);
      },
    });

  console.log("errors ", errors);
  console.log("values 2 ", values);

  const initalState = {
    tenPhim: "",
    trailer: "",
    moTa: "",
    ngayKhoiChieu: "",
    dangChieu: false,
    sapChieu: false,
    hot: false,
    danhGia: 0,
    hinhAnh: {},
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState();

  useEffect(() => {
    setFormValues(data);
  }, [data]);

  const handleChangeDatePicker = (date) => {
    let ngayKhoiChieu = moment(date.target.value).format("DD/MM/YYYY");
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

  const initialValues = {};
  //Get edited movie
  // if (movieId) {
  //   console.log(movieId);
  //   dispatch(actFetchMovieDetails(movieId));
  // }

  // const handleClick = () => {
  //   handleOpen();
  // };

  // const onSubmit = (data) => {
  //   //const actionResult = modalType === "Edit" ? handleMovieEdit(data) : handleMovieAdd(data);
  //   //handleClose();

  //   console.log(data);
  // };

  const onError = (err) => {
    setError(err);
    console.log(error);
  };

  const handleMovieEdit = (data) => {
    // dispatch(actFetchMovieEdit(data));
  };

  const handleMovieAdd = async (movie) => {
    try {
      setLoading(true);

      movie = {
        movieName: movie.movieName,
        movieTrailer: movie.movieTrailer,
        movieDesc: movie.movieDesc,
        movieReleaseDate: movie.movieReleaseDate,
        movieOnAir: movie.movieOnAir,
        movieAirSoon: movie.movieAirSoon,
        movieHotness: movie.movieHotness,
        movieImg: movie,
      };
      const isValidMovie = await movieSchema.isValid(movie);
      if (isValidMovie) {
        dispatch(actFetchMovieAdd(movie));
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
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
                className={`${errors.tenPhim ? "movie-form__error modal__input" : "modal__input"}`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tenPhim}
              />
              {console.log(errors.tenPhim)}
              {errors.tenPhim && touched.email && <p>{errors.tenPhim}</p>}
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
                helperText={errors.movieTrailer?.message}
              />
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
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row" }}>
              <FormLabel
                className="movie-form__input-label"
                htmlFor="movie-release-date"
                sx={{ mr: 1 }}
              >
                Ngày khởi chiếu
              </FormLabel>
              <input
                name="ngayKhoiChieu"
                value={values.ngayKhoiChieu}
                id="movie-release-date"
                type="date"
                style={{ width: "fit-content" }}
                onChange={handleChangeDatePicker}
                onBlur={handleBlur}
              />
              <FormHelperText>{errors.movimovieTrailer?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
              <FormLabel className="movie-form__input-label" htmlFor="movie-on-air" sx={{ mr: 1 }}>
                Đang chiếu
              </FormLabel>
              <Switch
                name="dangChieu"
                value={values.dangChieu}
                onClick={handleChangeSwitch("dangChieu")}
              />
              <FormHelperText>{errors.momovieOnAir?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
              <FormLabel className="movie-form__input-label" sx={{ mr: 1 }}>
                Sắp chiếu
              </FormLabel>
              <Switch
                name="sapChieu"
                value={values.sapChieu}
                label="Sắp chiếu"
                onClick={handleChangeSwitch("sapChieu")}
                onBlur={handleBlur}
                inputProps={{ "aria-label": "controlled" }}
              />
              <FormHelperText>{errors.movimovieAirSoon?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
              <FormLabel className="movie-form__input-label" htmlFor="movie-hotness" sx={{ mr: 1 }}>
                Hot
              </FormLabel>
              <Switch name="hot" value={values.hot} onClick={handleChangeSwitch("hot")} />
              <FormHelperText>{errors.movimovieHotness?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
              <FormLabel className="movie-form__input-label" htmlFor="movie-hotness" sx={{ mr: 1 }}>
                Đánh giá
              </FormLabel>
              <Rating
                name="danhGia"
                defaultValue={0}
                max={10}
                onChange={handleChangeNumberInput("danhGia")}
                onBlur={handleBlur}
              />
              <FormHelperText>{errors.movimovieHotness?.message}</FormHelperText>
            </FormControl>
            <FormControl>
              <Box fullWidth sx={{ my: 1, flexDirection: "row" }}>
                <FormLabel className="movie-form__input-label" htmlFor="movie-img" sx={{ mr: 1 }}>
                  Hình ảnh
                </FormLabel>
                <input
                  name="hinhAnh"
                  id="movie-img"
                  type="file"
                  accept="image/png, image/jpeg, image/gif, image/png"
                  onChange={handleChangeFile}
                  onBlur={handleBlur}
                />
                <FormHelperText>{errors.movieImg?.message}</FormHelperText>
              </Box>
              <Image src={imgSrc} alt="..." className="modal__img" />
            </FormControl>
            <Box sx={{ mt: 2 }}>
              <Button loading={loading}>{button}</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default MovieModal;
