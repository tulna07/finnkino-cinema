import * as yup from "yup";
import pattern from "./pattern";

const loginSchema = yup.object({
  username: yup
    .string()
    .required("Username is required.")
    .matches(pattern.username, "Username is 4 - 16 alphanumeric characters long."),
  password: yup
    .string()
    .matches(
      pattern.password,
      "Password should be a minimum of eight characters, at least one letter and one number.",
    ),
});

export default loginSchema;
