import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import { useRef } from "react";

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

SearchBar.defaultProps = {
  onSubmit: null,
};

function SearchBar(props) {
  const { onSubmit, className } = props;
  const [searchTerms, setSearchTerms] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerms(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const searchValues = {
        searchTerms: value,
      };

      onSubmit(searchValues.searchTerms);
    }, 300);
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        m: "10px 0",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
      className={className}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Nhập thông tin tìm kiếm"
        onChange={handleSearchTermChange}
        value={searchTerms}
        className="search-bar__input"
      />
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
