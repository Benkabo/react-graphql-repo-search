import React from "react";
import { TextField, InputAdornment, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles({
  input: {
    width: "100%",
  },
});

const SearchBar = ({ value, onChange }) => {
  const classes = useStyle();

  return (
    <TextField
      className={classes.input}
      label="Search for repo ..."
      type="search"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={(e) => onChange(e.target.value) }
    />
  );
};

export default SearchBar;
