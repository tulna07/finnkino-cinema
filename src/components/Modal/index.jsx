import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Material UI
import { Stack } from "@mui/material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

// Scss
import "./style.scss";

const Modal = ({ title, children = [], buttonContent, open = false, setOpen, path = "" }) => {
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      return;
    }

    if (path) {
      navigate(path);
    }

    setOpen(false);
  };

  const renderContent = () =>
    children?.map((item, idx) => (
      <DialogContentText key={idx} className="ticket-booking-dialog__info">
        {item}
      </DialogContentText>
    ));

  return (
    <Dialog
      className="ticket-booking-dialog"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className="ticket-booking-dialog__title">{title}</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={1}>{renderContent()}</Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus className="ticket-booking-dialog__btn-accept">
          {buttonContent}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
