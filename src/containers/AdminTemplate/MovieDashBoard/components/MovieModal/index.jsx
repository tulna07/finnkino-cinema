import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// Yup resolver
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./style.scss";
import { movieSchema } from "@/validators";
import { actFetchMovieEdit } from "@/redux/actions/movieManagement";

// Material UI
import {
  Box,
  Typography,
  Modal,
  FormControl,
  TextField,
  FormLabel,
  Button,
  Switch,
  FormControlLabel,
  Alert,
  FormHelperText,
} from "@mui/material";
import UploadButtons from "@/containers/AdminTemplate/components/UploadButton";

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

function MovieModal({ ModalButton, modalType, data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const [image, setImage] = React.useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(movieSchema),
  });

  const handleClick = (data) => {
    handleOpen();
    handleMovieEdit(data);
  };
  const onError = (err) => {
    console.error(err);
  };

  const handleMovieEdit = (data) => {
    dispatch(actFetchMovieEdit(data));
  };

  const handleMovie = async (movie) => {
    try {
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
      console.log(movie);
    } catch (error) {
      console.log(error);
    }

    const isValidMovie = await movieSchema.isValid(movie);
  };

  return (
    <div>
      <ModalButton onClick={() => handleClick(data)} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="movie-modal">
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {data ? "Sửa thông tin phim" : "Thêm phim mới"}
          </Typography>
          <Box sx={{ mt: 2 }} component="form" onSubmit={handleSubmit(handleMovie, onError)}>
            <FormControl fullWidth sx={{ my: 1 }}>
              <FormLabel className="modal__input-label" htmlFor="movie-name">
                Tên phim
              </FormLabel>
              <TextField
                name="movieName"
                id="movie-name"
                variant="outlined"
                fullWidth
                className="modal__input"
                {...register("movieName")}
                helperText={errors.movieName?.message}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <FormLabel className="modal__input-label" htmlFor="movie-trailer">
                Trailer
              </FormLabel>
              <TextField
                name="movieTrailer"
                id="movie-trailer"
                variant="outlined"
                fullWidth
                {...register("movieTrailer")}
                helperText={errors.movieTrailer?.message}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <FormLabel className="modal__input-label" htmlFor="movie-desc">
                Mô tả
              </FormLabel>
              <TextField
                name="movieDesc"
                id="movie-desc"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                {...register("movieDesc")}
                helperText={errors.movieDesc?.message}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row" }}>
              <FormLabel className="modal__input-label" htmlFor="movie-release-date" sx={{ mr: 1 }}>
                Ngày khởi chiếu
              </FormLabel>
              <input
                name="movieReleaseDate"
                id="movie-release-date"
                type="date"
                style={{ width: "fit-content" }}
                {...register("movieReleaseDate")}
              />
              <FormHelperText>{errors.movimovieTrailer?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
              <FormLabel className="modal__input-label" htmlFor="movie-on-air" sx={{ mr: 1 }}>
                Đang chiếu
              </FormLabel>
              <FormControlLabel
                name="movieOnAir"
                id="movie-on-air"
                control={<Switch defaultChecked />}
                {...register("movieOnAir")}
              />
              <FormHelperText>{errors.momovieOnAir?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
              <FormLabel className="modal__input-label" sx={{ mr: 1 }}>
                Sắp chiếu
              </FormLabel>
              <FormControlLabel
                name="movieAirSoon"
                id="movie-air-soon"
                control={<Switch defaultChecked />}
                {...register("movieAirSoon")}
              />
              <FormHelperText>{errors.movimovieAirSoon?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
              <FormLabel className="modal__input-label" htmlFor="movie-hotness" sx={{ mr: 1 }}>
                Hot
              </FormLabel>
              <FormControlLabel
                name="movieHotness"
                id="movie-hotness"
                control={<Switch defaultChecked />}
                {...register("movieHotness")}
              />
              <FormHelperText>{errors.movimovieHotness?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row" }}>
              <FormLabel className="modal__input-label" htmlFor="movie-img" sx={{ mr: 1 }}>
                Hình ảnh
              </FormLabel>
              <input
                name="movieImg"
                id="movie-img"
                type="file"
                style={{ flex: 1 }}
                {...register("movieImg")}
                //onChange={handleImageInput}
              />
              <FormHelperText>{errors.movieImg?.message}</FormHelperText>
            </FormControl>
            <Button sx={{ backgroundColor: "var(--primary)", color: "var(--dark-gray)" }}>
              Thêm phim
            </Button>
            <button type="submit">Submit</button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default MovieModal;
