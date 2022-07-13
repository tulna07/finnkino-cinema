import "./Loader.scss";
import Box from "@mui/material/Box";

function Loader({ className = "" }) {
  return (
    <Box sx={{ p: 10 }}>
      <div className={`loader ${className}`}></div>
    </Box>
  );
}

export default Loader;
