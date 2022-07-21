import "./Loader.scss";
import Box from "@mui/material/Box";

const Loader = ({ className = "" }) => (
  <Box sx={{ p: 10 }}>
    <div className={`loader ${className}`}></div>
  </Box>
);

export default Loader;
