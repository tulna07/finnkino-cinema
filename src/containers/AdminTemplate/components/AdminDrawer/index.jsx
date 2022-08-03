import { Link } from "react-router-dom";

// Material UI
import { styled } from "@mui/material/styles";
import { Stack, IconButton, List, Divider, Avatar, Drawer as MuiDrawer } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import {} from "@mui/material";

import DrawerItems from "./DrawerItems";

import FinnkinoLogo from "@/assets/images/header-logo.png";

// Scss
import "./style.scss";

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: 240,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("xl")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const AdminDrawer = ({ toggleDrawer, open }) => (
  <Drawer
    className="admin-drawer"
    variant="permanent"
    open={open}
    PaperProps={{ sx: { bgcolor: "#222" } }}
  >
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      sx={{ position: "relative", p: "12px" }}
    >
      <Link to="/">
        <Avatar className="admin-drawer__avatar" alt="Finnkino logo" src={FinnkinoLogo} />
      </Link>
      <IconButton onClick={toggleDrawer}>
        <ChevronLeft sx={{ color: "#fff" }} />
      </IconButton>
    </Stack>
    <Divider className="admin-drawer__divider" />
    <List className="admin-drawer-list" component="nav">
      <DrawerItems />
    </List>
  </Drawer>
);

export default AdminDrawer;
