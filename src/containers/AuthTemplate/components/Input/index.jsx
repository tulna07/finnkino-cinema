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
      className="auth-input"
      helperText={error?.message}
      fullWidth
      variant="standard"
      sx={{ mb: 2 }}
    />
  );
};

export default Input;
