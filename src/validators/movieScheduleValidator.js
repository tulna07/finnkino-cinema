import * as yup from "yup";
import msg from "./message";

const movieScheduleSchema = yup.object({
  ngayChieuGioChieu: yup.string().required(msg.required),
  maRap: yup.string().required(msg.required),
  giaVe: yup
    .number(msg.required)
    .min(75000, msg.ticketPrice)
    .max(200000, msg.ticketPrice)
    .required(msg.required),
});

export default movieScheduleSchema;
