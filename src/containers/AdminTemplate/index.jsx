import { useState } from "react";
import { Outlet } from "react-router-dom";

// Material UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack, Box, Toolbar, Grid, Paper } from "@mui/material";

// Components
import AdminAppBar from "./components/AdminAppBar";
import AdminDrawer from "./components/AdminDrawer";
import AdminFooter from "./components/AdminFooter";

const theme = createTheme();

function AdminTemplate() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => setOpen(!open);

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row">
        <AdminAppBar toggleDrawer={toggleDrawer} open={open} />
        <AdminDrawer toggleDrawer={toggleDrawer} open={open} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Grid container p={4}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  width: "100%",
                }}
              >
                <Outlet />
              </Paper>
            </Grid>
          </Grid>
          <AdminFooter />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default AdminTemplate;
