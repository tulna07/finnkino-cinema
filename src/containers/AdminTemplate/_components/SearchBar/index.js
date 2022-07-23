import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", m: "10px 0", display: "flex", alignItems: "center", width: "100%" }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Nhập thông tin tìm kiếm" />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          backgroundColor: "var(--primary)",
          color: "var(--white)",
          "&:hover": {
            backgroundColor: "#caa100;",
          },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
