import { Link } from "react-router-dom";

// Material UI
import { Typography } from "@mui/material";

// Scss
import "./style.scss";

const AdminFooter = () => {
  return (
    <Typography variant="body2" align="center" className="admin-footer">
      Copyright &copy;{" "}
      <Link to="/" style={{ color: "#070707" }}>
        Finnkino
      </Link>
      {", "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default AdminFooter;
