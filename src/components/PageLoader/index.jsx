// Material UI
import { Box, LinearProgress } from "@mui/material";

// Components
import Image from "../Image";
import images from "@/assets/images";

// Style
import "./style.scss";

const PageLoader = () => {
  return (
    <Box className="page-loader">
      <Image src={images.logo} alt="logo" width="100" />
      <LinearProgress color="inherit" className="linear-progress" />
    </Box>
  );
};

export default PageLoader;
