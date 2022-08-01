import * as React from "react";
import { useDispatch } from "react-redux";

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
import Loader from "@/components/Loader";

//Others
import "./style.scss";
import { userSchema } from "@/validators";
import { GROUP_ID } from "@/constants";
import { actGetUserAdd, actGetUserEdit } from "@/store/actions/userManagement";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function UserModal(props) {
  const { openModalUser, setOpenModalUser, title, button, data, loading, userAccount, modalType } =
    props;
  const dispatch = useDispatch();
  const handleClose = () => setOpenModalUser(false);

  let userEdit;
  if (data) {
    userEdit = data[0];
  }

  const initialValuesAddUser = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  };

  const initialValuesEditUser = {
    taiKhoan: userEdit?.taiKhoan,
    matKhau: userEdit?.matKhau,
    email: userEdit?.email,
    soDT: userEdit?.soDT,
    maLoaiNguoiDung: userEdit?.maLoaiNguoiDung,
    hoTen: userEdit?.hoTen,
  };

  const initialValues = modalType === "addUser" ? initialValuesAddUser : initialValuesEditUser;

  const { errors, values, touched, setFieldValue, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: (values) => {
        values.maNhom = GROUP_ID;
        if (modalType === "addUser") {
          dispatch(actGetUserAdd(values));
        } else {
          values.taiKhoan = userAccount;
          dispatch(actGetUserEdit(values));
        }

        window.location.reload();
      },
    });

  const handleChangeSelect = (e) => {
    setFieldValue("maLoaiNguoiDung", e.target.value);
  };

  return (
    <Modal
      open={openModalUser}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="user-modal">
        <Typography variant="h5" component="h2" id="modal-modal-title" variant="h5" component="h2">
          {title}
        </Typography>
        {loading ? (
          <Loader />
        ) : (
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
                  value={values.hoTen}
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
                  value={values.taiKhoan}
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
                  value={values.matKhau}
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
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <FormHelperText error>{errors.email}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel htmlFor="user-phoneNo">Số điện thoại</FormLabel>
                <TextField
                  name="soDT"
                  id="user-phoneNo"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.soDT}
                />
                {errors.soDT && touched.soDT && (
                  <FormHelperText error>{errors.soDT}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth className="movie-form__input-wrapper">
                <FormLabel id="user-type">Loại người dùng</FormLabel>
                <Select
                  htmlFor="user-type"
                  onChange={handleChangeSelect}
                  value={values.maLoaiNguoiDung}
                >
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
        )}
      </Box>
    </Modal>
  );
}

export default UserModal;
