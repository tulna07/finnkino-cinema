import * as yup from "yup";
import pattern from "./pattern";

const registerSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required.")
    .matches(pattern.fullName, "Full name is invalid."),
  username: yup
    .string()
    .required("Username is required.")
    .matches(pattern.username, "Username is 4 - 16 alphanumeric characters long."),
  email: yup.string().required("Email is required").email("Email address is invalid."),
  phoneNumber: yup
    .string()
    .required("Phone number is required.")
    .matches(pattern.phoneNumber, "Phone number is invalid."),
  password: yup
    .string()
    .matches(
      pattern.password,
      "Password should be a minimum of eight characters, at least one letter and one number.",
    ),
  confirmedPassword: yup.string().oneOf([yup.ref("password")], "Password does not match."),
});

export default registerSchema;
