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

// Register schema
import { registerSchema } from "@/validators";

// Api
import { userApi } from "@/services";

// Constants
import { GROUP_ID } from "@/constants";

// Utils
import { responseMapper } from "@/utils";

const Register = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { control, handleSubmit } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      hoTen: "",
      taiKhoan: "",
      email: "",
      soDt: "",
      matKhau: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);

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
        const msg = responseMapper(error);
        setErrorMsg(msg);
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleRegister)} noValidate mt={1}>
      {errorMsg && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMsg}
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
        onClick={() => setErrorMsg("")}
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
        Register
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

export default Register;
