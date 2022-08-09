import { Link } from "react-router-dom";

// Material UI
import { Avatar } from "@mui/material";

import FinnkinoLogo from "@/assets/images/header-logo.png";

const Header = () => (
  <Link to="/">
    <Avatar
      alt="Finnkino logo"
      src={FinnkinoLogo}
      sx={{
        width: 75,
        height: 75,
      }}
    />
  </Link>
);

export default Header;
