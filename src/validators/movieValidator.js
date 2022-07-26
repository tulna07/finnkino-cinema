import * as yup from "yup";
import pattern from "./pattern";
import msg from "./message";

const movieSchema = yup.object({
  movieName: yup.string().required(msg.required),
  movieTrailer: yup.string().required(msg.required).matches(pattern.url, msg.url),
  movieDesc: yup.string().required(msg.required),
  movieReleaseDate: yup.string().required(msg.required),
  movieOnAir: yup.boolean().required(msg.required),
  movieAirSoon: yup.boolean().required(msg.required),
  movieHotness: yup.boolean().required(msg.required),
  movieImg: yup.mixed().required(msg.required),
});

export default movieSchema;
