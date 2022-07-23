// Material UI
import { LoadingButton } from "@mui/lab";

// Scss
import "./style.scss";

const Button = ({ children, ...others }) => (
  <LoadingButton {...others} className="auth-button" type="submit" fullWidth variant="contained">
    {children}
  </LoadingButton>
);

export default Button;
