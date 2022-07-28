import * as yup from "yup";
import pattern from "./pattern";
import msg from "./message";

const movieSchema = yup.object({
  tenPhim: yup.string().required(msg.required),
  trailer: yup.string().required(msg.required).matches(pattern.url, msg.url),
  moTa: yup.string().required(msg.required),
  ngayKhoiChieu: yup.string().required(msg.required),
  dangChieu: yup.boolean().required(msg.required),
  sapChieu: yup.boolean().required(msg.required),
  hot: yup.boolean().required(msg.required),
  hinhAnh: yup.mixed().required(msg.required),
});

export default movieSchema;
