// Material UI
import { Toolbar, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

// Components
import { AppBar } from "./styled";
import AccountAvatar from "./AccountAvatar";

const AdminAppBar = ({ toggleDrawer, open }) => (
  <AppBar position="absolute" open={open} sx={{ backgroundColor: "#fdca00" }}>
    <Toolbar
      sx={{
        pr: "24px", // keep right padding when drawer closed
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: "36px",
          ...(open && { display: "none" }),
        }}
      >
        <Menu />
      </IconButton>
      <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Dashboard
      </Typography>
      <AccountAvatar />
    </Toolbar>
  </AppBar>
);
export default AdminAppBar;
