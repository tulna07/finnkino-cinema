import * as yup from "yup";
import pattern from "./pattern";
import msg from "./message";

const userSchema = yup.object().shape({
  taiKhoan: yup.string().required(msg.required),
  matKhau: yup.string().required(msg.required).matches(pattern.password, msg.password),
  email: yup.string().required(msg.required).email(msg.email),
  soDT: yup.string().required(msg.required).matches(pattern.phoneNumber, msg.phoneNumber),
  maLoaiNguoiDung: yup.string().required(msg.required),
  hoTen: yup.string().required(msg.required),
});

export default userSchema;
