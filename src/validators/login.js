import * as yup from "yup";
import pattern from "./pattern";
import msg from "./message";

const loginSchema = yup.object({
  username: yup.string().required(msg.required).matches(pattern.username, msg.username),
  password: yup.string().required(msg.required).matches(pattern.password, msg.password),
});

export default loginSchema;
