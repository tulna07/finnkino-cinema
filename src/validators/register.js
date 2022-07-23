import * as yup from "yup";
import pattern from "./pattern";
import msg from "./message";

const registerSchema = yup.object({
  fullName: yup.string().required(msg.required).matches(pattern.fullName, msg.fullName),
  username: yup.string().required(msg.required).matches(pattern.username, msg.username),
  email: yup.string().required(msg.required).email(msg.email),
  phoneNumber: yup.string().required(msg.required).matches(pattern.phoneNumber, msg.phoneNumber),
  password: yup.string().required(msg.required).matches(pattern.password, msg.password),
  confirmedPassword: yup
    .string()
    .required(msg.required)
    .oneOf([yup.ref("password")], msg.confirmedPassword),
});

export default registerSchema;
