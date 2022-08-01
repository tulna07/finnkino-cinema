import * as React from "react";

//Formik
import { Formik, useFormik } from "formik";

//Material UI
import Modal from "@mui/material/Modal";
import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

//Components
import { SubmitButton } from "@/containers/AdminTemplate/components/Buttons";

//Others
import "./style.scss";
import { userSchema } from "@/validators";
import { GROUP_ID } from "@/constants";
import { useDispatch } from "react-redux";
import { actGetUserAdd } from "@/redux/actions/userManagement";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function UserModal(props) {
  const { openModalUser, setOpenModalUser, title, button, userAccount, modalType } = props;
  const dispatch = useDispatch();
  const handleClose = () => setOpenModalUser(false);

  const initialValues = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  };

  const { errors, values, touched, setFieldValue, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values) => {
        console.log(values);
        values.maNhom = GROUP_ID;

        if (modalType === "addUser") {
        }
        dispatch(actGetUserAdd(values));
        window.location.reload();
      },
    });

  const handleChangeSelect = (e) => {
    setFieldValue("maLoaiNguoiDung", e.target.value);
  };

  return (
    <div>
      <Modal
        open={openModalUser}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="user-modal">
          <Typography
            variant="h5"
            component="h2"
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Formik>
            <Box sx={{ mt: 2 }} component="form" onSubmit={handleSubmit}>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel htmlFor="user-name">Họ và tên</FormLabel>
                <TextField
                  name="hoTen"
                  id="user-name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.hoTen && touched.hoTen && (
                  <FormHelperText error>{errors.hoTen}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel htmlFor="user-acount">Tài khoản</FormLabel>
                <TextField
                  name="taiKhoan"
                  id="user-acount"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.taiKhoan && touched.taiKhoan && (
                  <FormHelperText error>{errors.taiKhoan}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel htmlFor="user-password">Mật khẩu</FormLabel>
                <TextField
                  name="matKhau"
                  id="user-password"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.matKhau && touched.matKhau && (
                  <FormHelperText error>{errors.matKhau}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel htmlFor="user-email">Email</FormLabel>
                <TextField
                  name="email"
                  id="user-email"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <FormHelperText error>{errors.email}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel htmlFor="user-phoneNo">Số điện thoại</FormLabel>
                <TextField
                  name="soDt"
                  id="user-phoneNo"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.soDt && touched.soDt && (
                  <FormHelperText error>{errors.soDt}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel id="user-type">Loại người dùng</FormLabel>
                <Select htmlFor="user-type" onChange={handleChangeSelect}>
                  <MenuItem value="KhachHang">Khách hàng</MenuItem>
                  <MenuItem value="QuanTri">Quản trị</MenuItem>
                </Select>
                {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung && (
                  <FormHelperText error>{errors.maLoaiNguoiDung}</FormHelperText>
                )}
              </FormControl>
              <Box>
                <SubmitButton sx={{ py: 1, mt: 2 }}>{button}</SubmitButton>
              </Box>
            </Box>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

export default UserModal;
