import { Link } from "react-router-dom";

// Material UI
import { Typography } from "@mui/material";

const AuthFooter = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{ mt: 8, mb: 4, color: "#fff", fontSize: "17px" }}
    >
      Copyright &copy;{" "}
      <Link to="/" style={{ color: "#fff" }}>
        Finnkino
      </Link>
      {", "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default AuthFooter;
