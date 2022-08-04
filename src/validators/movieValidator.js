import * as yup from "yup";
import pattern from "./pattern";
import msg from "./message";

const editMovieSchema = yup.object({
  tenPhim: yup.string().required(msg.required),
  trailer: yup.string().required(msg.required).matches(pattern.url, msg.url),
  moTa: yup.string().required(msg.required),
  ngayKhoiChieu: yup.string().required(msg.required),
  dangChieu: yup.boolean().required(msg.required).typeError(msg.required),
  sapChieu: yup.boolean().required(msg.required).typeError(msg.required),
  hot: yup.boolean().required(msg.required).typeError(msg.required),
  danhGia: yup.number().min(1, msg.rating).required(msg.required),
  hinhAnh: yup.object(msg.required).nullable(),
});

const addMovieSchema = yup.object({
  tenPhim: yup.string().required(msg.required),
  trailer: yup.string().required(msg.required).matches(pattern.url, msg.url),
  moTa: yup.string().required(msg.required),
  ngayKhoiChieu: yup.string().required(msg.required),
  dangChieu: yup.boolean().required(msg.required).typeError(msg.required),
  sapChieu: yup.boolean().required(msg.required).typeError(msg.required),
  hot: yup.boolean().required(msg.required).typeError(msg.required),
  danhGia: yup.number().min(1, msg.rating).required(msg.required),
  hinhAnh: yup.mixed().required(msg.required),
});

export { editMovieSchema, addMovieSchema };
