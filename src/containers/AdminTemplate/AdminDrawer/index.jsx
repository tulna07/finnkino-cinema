// Material UI
import { Toolbar, IconButton, List, Divider } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

// Styled Components
import { Drawer } from "./styled";
import { mainListItems } from "./listItems";

const AdminDrawer = ({ toggleDrawer, open }) => (
  <Drawer variant="permanent" open={open}>
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        px: [1],
      }}
    >
      <IconButton onClick={toggleDrawer}>
        <ChevronLeft />
      </IconButton>
    </Toolbar>
    <Divider />
    <List component="nav">{mainListItems}</List>
  </Drawer>
);

export default AdminDrawer;
