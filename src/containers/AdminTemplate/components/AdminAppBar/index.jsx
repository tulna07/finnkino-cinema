// Material UI
import { styled } from "@mui/material/styles";
import { Toolbar, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

// Components
import AccountAvatar from "./AccountAvatar";

import { AppBar as MuiAppBar } from "@mui/material";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AdminAppBar = ({ toggleDrawer, open }) => (
  <AppBar
    position="absolute"
    open={open}
    sx={{ backgroundColor: "#fdca00", overflow: "hidden", height: "64px" }}
  >
    <Toolbar
      sx={{
        pr: "24px",
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: "36px",
          color: "var(--black)",
          ...(open && { display: "none" }),
        }}
      >
        <Menu />
      </IconButton>
      <Typography component="h1" variant="h6" noWrap sx={{ flexGrow: 1 }} color="#000">
        Finnkino Cinema
      </Typography>
      <AccountAvatar />
    </Toolbar>
  </AppBar>
);

export default AdminAppBar;
