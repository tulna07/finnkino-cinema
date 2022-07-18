import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks";
import { useForm } from "react-hook-form";

// Material UI
import {
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  InputAdornment,
  Stack,
  Alert,
  IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Components
import AuthInput from "./AuthInput";

// Yup resolver
import { yupResolver } from "@hookform/resolvers/yup";

// Signup schema
import { signupSchema } from "@/validators";

// Api
import { userApi } from "@/services";

// Constants
import { ROLE } from "@/constants";

const Signup = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { control, handleSubmit } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(signupSchema),
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (user) => {
    (async () => {
      try {
        setLoading(true);

        user = { taiKhoan: user.username, matKhau: user.password };
        user = await userApi.signup(user);
        setLoading(false);
        auth.login(user);

        if (user.maLoaiNguoiDung === ROLE.CLIENT) {
          navigate("/", { replace: true });
        }

        if (user.maLoaiNguoiDung === ROLE.ADMIN) {
          navigate("/admin", { replace: true });
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate mt={1}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Incorrect username or password.
        </Alert>
      )}
      <AuthInput
        name="fullName"
        control={control}
        label="Full name"
        fullWidth
        variant="standard"
        sx={{ mb: 2 }}
      />
      <AuthInput
        name="username"
        control={control}
        label="Username"
        fullWidth
        variant="standard"
        sx={{ mb: 2 }}
      />
      <AuthInput
        name="email"
        control={control}
        type="email"
        label="Email"
        fullWidth
        variant="standard"
        sx={{ mb: 2 }}
      />
      <AuthInput
        name="phoneNumber"
        control={control}
        label="Phone number"
        fullWidth
        variant="standard"
        sx={{ mb: 2 }}
      />
      <AuthInput
        name="password"
        control={control}
        label="Password"
        fullWidth
        variant="standard"
        type={showPassword ? "password" : "text"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox value="remember" color="primary" onChange={() => setChecked(!checked)} />
        }
        label={
          <Box component="p">
            I accept Finnkino web's <Link href="#">terms and conditions</Link>.
          </Box>
        }
      />
      <LoadingButton
        onClick={() => setError(false)}
        disabled={!checked}
        loading={loading}
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
        Sign Up
      </LoadingButton>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
        <Link href="" variant="body2" onClick={() => navigate("/auth/login")}>
          Already have an account? Log in
        </Link>
      </Stack>
    </Box>
  );
};

export default Signup;
