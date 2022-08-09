import { useState } from "react";
import { useNavigate, Navigate, Link as RouterLink } from "react-router-dom";
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
  Typography,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

// Components
import Input from "../components/Input";
import Button from "../components/Button";

// Yup resolver
import { yupResolver } from "@hookform/resolvers/yup";

// Register schema
import { registerSchema } from "@/validators";

// Api
import { userApi } from "@/api";

// Constants
import { GROUP_ID } from "@/constants";

// Scss
import "./style.scss";

const RegisterPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { control, handleSubmit } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmedPassword: "",
    },
    resolver: yupResolver(registerSchema),
  });

  if (auth.user) {
    return <Navigate to="/" />;
  }

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmedPassword = () => setShowConfirmedPassword(!showConfirmedPassword);

  const handleRegister = (user) => {
    (async () => {
      try {
        setLoading(true);

        // Register
        user = {
          hoTen: user.fullName,
          taiKhoan: user.username,
          email: user.email,
          soDt: user.phoneNumber,
          matKhau: user.password,
          maNhom: GROUP_ID,
        };
        user = await userApi.register(user);

        // Login automatically if registering successfully
        user = { taiKhoan: user.taiKhoan, matKhau: user.matKhau };
        user = await userApi.login(user);
        auth.login(user);
        navigate("/", { replace: true });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <Box
      className="auth-register-form"
      component="form"
      onSubmit={handleSubmit(handleRegister)}
      noValidate
      mt={1}
    >
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <Input name="fullName" control={control} label="Họ và tên" />
      <Input name="username" control={control} label="Tài khoản" />
      <Input name="email" control={control} type="email" label="Email" />
      <Input name="phoneNumber" control={control} label="Số điện thoại" />
      <Input
        name="password"
        control={control}
        label="Mật khẩu"
        type={showPassword ? "password" : "text"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Input
        name="confirmedPassword"
        control={control}
        label="Xác nhận mật khẩu"
        type={showConfirmedPassword ? "password" : "text"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowConfirmedPassword}
              >
                {showConfirmedPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormControlLabel
        control={
          <Checkbox value="remember" color="primary" onChange={() => setChecked(!checked)} />
        }
        className="accept-policies"
        label={
          <Box component="p">
            Tôi chấp nhận <Link href="#">điều khoản và dịch vụ</Link> của Finnkino.
          </Box>
        }
      />
      <Button onClick={() => setError("")} disabled={!checked} loading={loading}>
        Đăng ký
      </Button>
      <Stack direction="row" justifyContent="flex-end " alignItems="center">
        <Typography className="auth-link-to-login">
          Đã có tài khoản? <RouterLink to="/auth/login">Đăng nhập</RouterLink>
        </Typography>
      </Stack>
    </Box>
  );
};

export default RegisterPage;
