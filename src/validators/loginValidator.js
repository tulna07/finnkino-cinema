import * as yup from "yup";

const loginSchema = yup.object({
  username: yup.string().required("Username is required."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must minimum eight characters, at least one letter and one number.",
    ),
});

export default loginSchema;
