// Material UI
import { TextField } from "@mui/material";

// React hook form
import { useController } from "react-hook-form";

// Scss
import "./style.scss";

const Input = ({ control, name, ...others }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      {...field}
      {...others}
      error={!!error}
      className="account-info__input"
      helperText={error?.message}
      fullWidth
      variant="filled"
      sx={{ mb: 2 }}
    />
  );
};

export default Input;
