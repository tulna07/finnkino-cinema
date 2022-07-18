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

// Login schema
import { loginSchema } from "@/validators";

// Api
import { userApi } from "@/services";

// Constants
import { ROLE } from "@/constants";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { control, handleSubmit } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(loginSchema),
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (user) => {
    (async () => {
      try {
        setLoading(true);

        user = { taiKhoan: user.username, matKhau: user.password };
        user = await userApi.login(user);
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
        name="username"
        control={control}
        label="Username"
        fullWidth
        variant="standard"
        sx={{ mb: 3 }}
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
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <LoadingButton
        onClick={() => setError(false)}
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
        Log In
      </LoadingButton>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
        <Link href="" variant="body2" onClick={() => navigate("/auth/signup")}>
          Don't have an account? Sign up
        </Link>
      </Stack>
    </Box>
  );
};

export default Login;
