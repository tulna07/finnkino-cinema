// Material UI
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { PeopleAlt, LocalMovies, CalendarMonth } from "@mui/icons-material";

export const mainListItems = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <PeopleAlt />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocalMovies />
      </ListItemIcon>
      <ListItemText primary="Movies" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonth />
      </ListItemIcon>
      <ListItemText primary="Showtime" />
    </ListItemButton>
  </>
);
