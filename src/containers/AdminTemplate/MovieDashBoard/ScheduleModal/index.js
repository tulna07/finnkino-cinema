import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik } from "formik";
import { FormControl, FormHelperText, FormLabel, TextField } from "@mui/material";
import { SubmitButton } from "../../components/Buttons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ScheduleModal({ openScheduleModal, setOpenScheduleModal }) {
  const handleClose = () => setOpenScheduleModal(false);

  return (
    <div>
      <Modal
        open={openScheduleModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tạo lịch chiếu - movie name
          </Typography>
          <Formik>
            <Box sx={{ mt: 2 }} component="form">
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel htmlFor="user-name">Hệ thống rạp</FormLabel>
                <TextField name="hoTen" id="user-name" variant="outlined" fullWidth />
                <FormHelperText error>Truong nay la bat buoc</FormHelperText>
              </FormControl>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel htmlFor="user-name">Cụm rạp</FormLabel>
                <TextField name="hoTen" id="user-name" variant="outlined" fullWidth />
                <FormHelperText error>Truong nay la bat buoc</FormHelperText>
              </FormControl>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel htmlFor="user-name">Ngày chiếu giờ chiếu</FormLabel>
                <TextField name="hoTen" id="user-name" variant="outlined" fullWidth />
                <FormHelperText error>Truong nay la bat buoc</FormHelperText>
              </FormControl>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel htmlFor="user-name">Giá vé</FormLabel>
                <TextField name="hoTen" id="user-name" variant="outlined" fullWidth />
                <FormHelperText error>Truong nay la bat buoc</FormHelperText>
              </FormControl>
              <SubmitButton sx={{ py: 1, mt: 2 }}>Tạo lịch chiếu</SubmitButton>
            </Box>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

export default ScheduleModal;
