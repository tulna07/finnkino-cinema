// Material UI
import { Stack, Avatar, Typography } from "@mui/material";

import FinnkinoLogo from "@/assets/images/header-logo.png";

const AuthCard = ({ children }) => {
  return (
    <Stack direction="column" alignItems="center" spacing={1} p={6} bgcolor="#fff">
      <Avatar alt="Finnkino logo" src={FinnkinoLogo} sx={{ width: 80, height: 80 }} />
      <Typography component="h1" variant="h5" fontWeight={700} color="#FFC800">
        Log In
      </Typography>
      {children}
    </Stack>
  );
};

export default AuthCard;
