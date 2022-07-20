import * as yup from "yup";

const signupSchema = yup.object({
  username: yup.string().required("Username is required."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password should be a minimum of eight characters, at least one letter and one number.",
    ),
});

export default signupSchema;
