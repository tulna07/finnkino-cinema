import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks";

// Material UI
import { Box, Grid, Stack } from "@mui/material";

// Components
import AuthBackground from "./AuthBackground";
import AuthHeader from "./AuthHeader";
import AuthCard from "./AuthCard";
import AuthFooter from "./AuthFooter";

const AuthTemplate = () => {
  const auth = useAuth();

  if (auth.user) {
    return <Navigate replace to="/" />;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <AuthBackground />
      <Stack direction="row" pl={7} pt={2}>
        <AuthHeader />
      </Stack>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item lg={3} md={6} sm={8} xs={10}>
          <AuthCard>
            <Outlet />
          </AuthCard>
        </Grid>
      </Grid>
      <Stack direction="row" justifyContent="center">
        <AuthFooter />
      </Stack>
    </Box>
  );
};

export default AuthTemplate;
