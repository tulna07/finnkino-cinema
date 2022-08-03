import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

// Material UI
import {
  FormControlLabel,
  Checkbox,
  Box,
  InputAdornment,
  InputLabel,
  IconButton,
  Grid,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Components
import Input from "./Input";
import Loader from "@/components/Loader";

// Yup resolver
import { yupResolver } from "@hookform/resolvers/yup";

// Update account info schema
import { accountInfoSchema } from "@/validators";

// Redux actions
import { actUpdateUserProfile } from "@/store/actions/userProfile";

// Constant
import { GROUP_ID } from "@/constants";

// Scss
import "./style.scss";

const AccountInfo = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmedNewPassword: false,
  });
  const [allowChangePassword, setAllowChangePassword] = useState(false);
  const { content: user, loading } = useSelector((rootReducer) => rootReducer.userProfile.data);
  const { loading: updateLoading } = useSelector((rootReducer) => rootReducer.userProfile.update);
  const { control, handleSubmit, setValue } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      username: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      currentPasswordRef: "",
      currentPassword: "",
      newPassword: "",
      confirmedNewPassword: "",
    },
    resolver: yupResolver(accountInfoSchema),
  });

  useEffect(() => {
    if (!user) return;

    setValue("username", user.taiKhoan);
    setValue("fullName", user.hoTen);
    setValue("email", user.email);
    setValue("phoneNumber", user.soDT);
    setValue("currentPasswordRef", user.matKhau);
    setAllowChangePassword(false);
    setCurrentPassword();
  }, [user]);

  const handleShowPassword = (id) => {
    setShowPassword({ ...showPassword, [id]: !showPassword[id] });
  };

  // Set old (current) password for submitting if changing password does not allow
  const setCurrentPassword = (allowChangePassword = false) => {
    const currentPassword = allowChangePassword ? "" : user.matKhau;
    setValue("currentPassword", currentPassword);
    setValue("newPassword", currentPassword);
    setValue("confirmedNewPassword", currentPassword);
  };

  // Hangle display inputs for changing password
  const handleAllowChangePassword = (event) => {
    const { checked } = event.target;
    setCurrentPassword(checked);
    setAllowChangePassword(checked);
  };

  const handleUpdateAccountInfo = (userInfo) => {
    const updatedUser = {
      taiKhoan: userInfo.username,
      hoTen: userInfo.fullName,
      matKhau: userInfo.confirmedNewPassword,
      email: userInfo.email,
      soDt: userInfo.phoneNumber,
      maNhom: GROUP_ID,
      maLoaiNguoiDung: user.loaiNguoiDung.maLoaiNguoiDung,
    };

    dispatch(actUpdateUserProfile(updatedUser));
  };

  return loading ? (
    <Loader />
  ) : (
    <Box
      className="account-info"
      component="form"
      onSubmit={handleSubmit(handleUpdateAccountInfo)}
      noValidate
      mt={1}
    >
      <Grid container spacing={4}>
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
        control={<Checkbox checked={allowChangePassword} onChange={handleAllowChangePassword} />}
        label="Đổi mật khẩu"
      />
      {allowChangePassword && (
        <>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Input
                type={showPassword["currentPassword"] ? "text" : "password"}
                name="currentPassword"
                control={control}
                placeholder="Mật khẩu hiện tại"
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
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Input
                type={showPassword["newPassword"] ? "text" : "password"}
                name="newPassword"
                control={control}
                placeholder="Mật khẩu mới"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleShowPassword("newPassword")}
                      >
                        {showPassword["newPassword"] ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Input
                type={showPassword["confirmedNewPassword"] ? "text" : "password"}
                name="confirmedNewPassword"
                control={control}
                placeholder="Xác nhận mật khẩu"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleShowPassword("confirmedNewPassword")}
                      >
                        {showPassword["confirmedNewPassword"] ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </>
      )}
      <Grid container>
        <Grid item>
          <LoadingButton type="submit" className="account-info__btn-save" loading={updateLoading}>
            Lưu lại
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountInfo;
