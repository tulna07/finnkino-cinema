// Material UI
import { LoadingButton } from "@mui/lab";

// Scss
import "./style.scss";

const Button = ({ children, onClick, ...others }) => (
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

export default Button;
