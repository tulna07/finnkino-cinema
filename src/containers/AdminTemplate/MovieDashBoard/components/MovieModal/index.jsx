import * as React from "react";
import { useForm } from "react-hook-form";

import "./style.scss";

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
} from "@mui/material";

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

  const { register, handleSubmit } = useForm({
    defaultValues: {
      movieName: "",
      movieTrailer: "",
      moviedesc: "",
      movieReleaseDate: "",
      movieOnAir: "",
      movieAirSoon: "",
      movieHotness: "",
      movieImg: "",
    },
  });

  // const formValues = {
  //   movieName: "",
  //   movieTrailer: "",
  //   moviedesc: "",
  //   movieReleaseDate: "",
  //   movieOnAir: "",
  //   movieAirSoon: "",
  //   movieHotness: "",
  //   movieImg: "",
  // };

  register("movieName", { required: "Trường này không được để trống" });
  register("movieTrailer", {
    required: {
      value: true,
      required: "Trường này không được để trống",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <ModalButton onClick={handleOpen} />
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
          <Box sx={{ mt: 2 }} component="form" onSubmit={handleSubmit(onSubmit, onError)}>
            <FormControl fullWidth sx={{ my: 1 }}>
              <FormLabel className="modal__input-label" htmlFor="movie-name">
                Tên phim
              </FormLabel>
              <TextField
                {...register("movieName", { required: true })}
                id="movie-name"
                variant="outlined"
                fullWidth
                className="modal__input"
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <FormLabel className="modal__input-label" htmlFor="movie-trailer">
                Trailer
              </FormLabel>
              <TextField
                {...register("movieTrailer", { required: true })}
                id="movie-trailer"
                variant="outlined"
                fullWidth
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <FormLabel className="modal__input-label" htmlFor="movie-desc">
                Mô tả
              </FormLabel>
              <TextField
                {...register("moviedesc", { required: true })}
                id="movie-desc"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row" }}>
              <FormLabel className="modal__input-label" htmlFor="movie-release-date" sx={{ mr: 1 }}>
                Ngày khởi chiếu
              </FormLabel>
              <input
                {...register("movieReleaseDate", { required: true })}
                id="movie-release-date"
                type="date"
                style={{ width: "fit-content" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
              <FormLabel className="modal__input-label" htmlFor="movie-on-air" sx={{ mr: 1 }}>
                Đang chiếu
              </FormLabel>
              <FormControlLabel
                {...register("movieOnAir", { required: true })}
                id="movie-on-air"
                control={<Switch defaultChecked />}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
              <FormLabel className="modal__input-label" sx={{ mr: 1 }}>
                Sắp chiếu
              </FormLabel>
              <FormControlLabel
                {...register("movieAirSoon", { required: true })}
                id="movie-air-soon"
                control={<Switch defaultChecked />}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row", alignItems: "center" }}>
              <FormLabel className="modal__input-label" htmlFor="movie-hotness" sx={{ mr: 1 }}>
                Hot
              </FormLabel>
              <FormControlLabel
                {...register("movieHotness", { required: true })}
                id="movie-hotness"
                control={<Switch defaultChecked />}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1, flexDirection: "row" }}>
              <FormLabel className="modal__input-label" htmlFor="movie-img" sx={{ mr: 1 }}>
                Hình ảnh
              </FormLabel>
              <input
                {...register("movieImg", { required: true })}
                id="movie-img"
                type="file"
                style={{ flex: 1 }}
              />
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
