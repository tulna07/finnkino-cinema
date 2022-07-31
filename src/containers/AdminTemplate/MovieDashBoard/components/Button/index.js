// Material UI
import { LoadingButton } from "@mui/lab";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { BorderColor } from "@mui/icons-material";

// Scss
import "./style.scss";

const SubmitButton = ({ children, onClick, ...others }) => (
  <LoadingButton
    onClick={onClick}
    {...others}
    className="modal__submit-btn"
    type="submit"
    variant="contained"
  >
    {children}
  </LoadingButton>
);

const EditMovieBtn = (props) => (
  <IconButton color="info" {...props}>
    <BorderColor className="movie-management__btn-icon" />
  </IconButton>
);

const DeleteMovieBtn = (props) => (
  <IconButton color="error" {...props}>
    <DeleteIcon className="movie-management__btn-icon" />
  </IconButton>
);

export { SubmitButton, EditMovieBtn, DeleteMovieBtn };
