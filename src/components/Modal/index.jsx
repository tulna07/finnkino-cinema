import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

const Modal = ({ actCloseModal, modalProps }) => {
  const { title, children, buttonContent, open, path } = modalProps;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      return;
    }

    if (path) {
      navigate(path);
    }

    dispatch(actCloseModal());
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
        <Button onClick={handleClose} className="ticket-booking-dialog__btn-accept">
          {buttonContent}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
