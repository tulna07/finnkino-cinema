import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

// Material UI
import {
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  InputAdornment,
  Stack,
  Alert,
  InputLabel,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Components
import Input from "./Input";

// Yup resolver
import { yupResolver } from "@hookform/resolvers/yup";

// Update account info schema
import { accountInfoSchema } from "@/validators";

// Scss
import "./style.scss";
import rootReducer from "@/store/reducers";

const AccountInfo = () => {
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmedNewPassword: false,
  });
  const [allowChangePassword, setAllowChangePassword] = useState(false);
  const { data: user, loading, error } = useSelector((rootReducer) => rootReducer.userProfile);
  const { control, handleSubmit, setValue } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: { username: "", fullName: "", email: "", phoneNumber: "" },
    resolver: yupResolver(accountInfoSchema),
  });

  useEffect(() => {
    if (!user) return;

    setValue("username", user.taiKhoan);
    setValue("fullName", user.hoTen);
    setValue("email", user.email);
    setValue("phoneNumber", user.soDT);
  }, [user]);

  const handleShowPassword = (id) => {
    setShowPassword({ ...showPassword, [id]: !showPassword[id] });
  };

  const handleAllowChangePassword = (event) => {
    const { checked } = event.target;
    setAllowChangePassword(checked);
  };

  const handleUpdateAccountInfo = () => {};

  return (
    <Box
      className="account-info"
      component="form"
      onSubmit={handleSubmit(handleUpdateAccountInfo)}
      noValidate
      mt={1}
    >
      <Grid container spacing={4}>
        {/* {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
          {error}
          </Alert>
        )} */}
        <Grid item xs={4}>
          <InputLabel className="account-info__input-label">Tài khoản</InputLabel>
          <Input
            name="username"
            control={control}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <InputLabel className="account-info__input-label">Họ và tên</InputLabel>
          <Input
            name="fullName"
            control={control}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <InputLabel className="account-info__input-label">Email</InputLabel>
          <Input name="email" control={control} />
        </Grid>
        <Grid item xs={4}>
          <InputLabel className="account-info__input-label">Số điện thoại</InputLabel>
          <Input name="phoneNumber" control={control} />
        </Grid>
      </Grid>
      <FormControlLabel
        className="account-info__checkbox-change-password"
        control={<Checkbox onChange={handleAllowChangePassword} />}
        label="Đổi mật khẩu"
      />
      {allowChangePassword && (
        <>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Input name="email" control={control} placeholder="Mật khẩu hiện tại" />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Input name="email" control={control} placeholder="Mật khẩu mới" />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Input name="email" control={control} placeholder="Xác nhận mật khẩu" />
            </Grid>
          </Grid>
        </>
      )}
      <Grid container>
        <Grid item>
          <Button className="account-info__btn-save" onClick={() => {}} loading={loading}>
            Lưu lại
          </Button>
        </Grid>
      </Grid>
      {/* <Input
          name="password"
          control={control}
          label="Mật khẩu"
          type={showPassword["currentPassword"] ? "password" : "text"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleShowPassword("currentPassword")}
                >
                  {showPassword["currentPassword"] ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        /> */}
    </Box>
  );
};

export default AccountInfo;
