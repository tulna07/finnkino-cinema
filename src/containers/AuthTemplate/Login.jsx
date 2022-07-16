import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks";

// Material UI
import {
  Button,
  TextField,
  FormControlLabel,
  Input,
  Checkbox,
  Link,
  Grid,
  FormControl,
  InputLabel,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      username: data.get("username"),
      password: data.get("password"),
    };

    auth.login(user);
    navigate("/");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate mt={1}>
      <FormControl fullWidth variant="standard" sx={{ mb: 3 }}>
        <TextField id="standard-username" label="Username" name="username" variant="standard" />
      </FormControl>
      <FormControl fullWidth variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? "password" : "text"}
          name="password"
          // value={values.password}
          // onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          p: 2,
          mt: 3,
          mb: 2,
          backgroundColor: "#fdca00",
          color: "#070707",
          fontWeight: 700,
          fontSize: 16,
          "&:hover": {
            backgroundColor: "#caa100;",
          },
        }}
      >
        Log In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
