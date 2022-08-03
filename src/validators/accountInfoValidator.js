import * as yup from "yup";
import pattern from "./pattern";
import msg from "./message";

const accountInfoSchema = yup.object({
  username: yup.string().required(msg.required).matches(pattern.username, msg.username),
  fullName: yup.string().required(msg.required).matches(pattern.fullName, msg.fullName),
  email: yup.string().required(msg.required).email(msg.email),
  phoneNumber: yup.string().required(msg.required).matches(pattern.phoneNumber, msg.phoneNumber),
  currentPassword: yup.string().required(msg.required).matches(pattern.password, msg.password),
  newPassword: yup.string().required(msg.required).matches(pattern.password, msg.password),
  confirmedNewPassword: yup
    .string()
    .required(msg.required)
    .oneOf([yup.ref("newPassword")], msg.confirmedPassword),
});

export default accountInfoSchema;
