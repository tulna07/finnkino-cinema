// Material UI
import { TextField } from "@mui/material";

// React hook form
import { useController } from "react-hook-form";

const AuthInput = ({ control, name, ...others }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return <TextField {...field} {...others} error={!!error} helperText={error?.message} />;
};

export default AuthInput;
