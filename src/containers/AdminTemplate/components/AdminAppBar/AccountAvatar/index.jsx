import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks";

// Material UI
import {
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
  Typography,
  Stack,
} from "@mui/material";
import { Logout, AccountCircle } from "@mui/icons-material";

const AccountAvatar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = !!anchorEl;

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const handleLogout = () => {
    auth.logout();
    navigate("/auth/login");
  };

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleOpenMenu}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt="admin avatar"
              src="https://i.pinimg.com/564x/e4/07/e7/e407e755e604c253887d8bf7ce1f9c3c.jpg"
              sx={{ width: 50, height: 50 }}
            />
          </IconButton>
        </Tooltip>
        <Typography color="#000" variant="h6" sx={{ fontSize: "15px" }}>
          {auth.user.taiKhoan}
        </Typography>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircle fontSize="medium" />
          </ListItemIcon>
          Thông tin tài khoản
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountAvatar;
