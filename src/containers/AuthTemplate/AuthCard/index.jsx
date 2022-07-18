import { useLocation } from "react-router-dom";

// Material UI
import { Stack, Avatar, Typography } from "@mui/material";

import FinnkinoLogo from "@/assets/images/header-logo.png";

const AuthCard = ({ children }) => {
  const { pathname } = useLocation();

  const cardTitle = pathname === "/auth/login" ? "Log In" : "Sign Up";

  return (
    <Stack direction="column" alignItems="center" spacing={1} p={5} bgcolor="#fff">
      <Avatar alt="Finnkino logo" src={FinnkinoLogo} sx={{ width: 80, height: 80 }} />
      <Typography component="h1" variant="h5" fontSize={30} fontWeight={700} color="#FFC800">
        {cardTitle}
      </Typography>
      {children}
    </Stack>
  );
};

export default AuthCard;
