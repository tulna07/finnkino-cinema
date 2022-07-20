// Material UI
import { Typography, Link } from "@mui/material";

const AdminFooter = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {"Copyright © "}
    <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);
export default AdminFooter;
