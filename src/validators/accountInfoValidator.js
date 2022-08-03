import * as yup from "yup";
import pattern from "./pattern";
import msg from "./message";

const accountInfoSchema = yup.object({
  username: yup.string(),
  fullName: yup.string(),
  email: yup.string().required(msg.required).email(msg.email),
  phoneNumber: yup.string().required(msg.required).matches(pattern.phoneNumber, msg.phoneNumber),
  currentPasswordRef: yup.string(),
  currentPassword: yup
    .string()
    .oneOf([yup.ref("currentPasswordRef")], "Mật khẩu hiện tại không đúng."),
  newPassword: yup.string().required(msg.required).matches(pattern.password, msg.password),
  confirmedNewPassword: yup
    .string()
    .required(msg.required)
    .oneOf([yup.ref("newPassword")], msg.confirmedPassword),
});

export default accountInfoSchema;
