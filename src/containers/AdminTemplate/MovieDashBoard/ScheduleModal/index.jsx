import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik, useFormik } from "formik";
import {
  Alert,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SubmitButton } from "../../components/Buttons";
import { DateTimePicker } from "@mui/x-date-pickers";

//moment
import moment from "moment";

import { cinemaApi, ticketBookingApi } from "@/api";
import { movieScheduleSchema } from "@/validators";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ScheduleModal({ movieId, openScheduleModal, setOpenScheduleModal }) {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));
  const [serverError, setServerError] = useState("");
  const [cineValue, setCineValue] = useState({
    cineSystem: [],
    cineGroup: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await cinemaApi.getCinemaSystemList();
        setCineValue({ ...cineValue, cineSystem: result });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const { errors, touched, setFieldValue, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: -1,
    },
    validationSchema: movieScheduleSchema,
    onSubmit: (values) => {
      values.maPhim = movieId;

      const fetchShowTime = async () => {
        try {
          await ticketBookingApi.createShowtime(values);
          setOpenScheduleModal(false);
        } catch (error) {
          setServerError(error);
        }
      };

      fetchShowTime();
    },
  });

  const handleClose = () => setOpenScheduleModal(false);

  const handleChangeCineSystem = async (e) => {
    const cineSystem = e.target.value;
    try {
      const result = await cinemaApi.getCinemaGroupBySystem(cineSystem);
      setCineValue({ ...cineValue, cineGroup: result });
    } catch (error) {
      setServerError(error);
    }
  };

  const handleChangeCineGroup = (e) => {
    setFieldValue("maRap", e.target.value);
  };

  const handleChangeDateTime = (newValue) => {
    setValue(newValue);
    let dateTime = moment(newValue).format("DD/MM/YYYY hh:mm:ss");
    setFieldValue("ngayChieuGioChieu", dateTime);
  };

  const renderCineSystem = () => {
    return cineValue?.cineSystem.map((item) => (
      <MenuItem key={item.maHeThongRap} value={item.maHeThongRap}>
        {item.tenHeThongRap}
      </MenuItem>
    ));
  };

  const renderCineGroup = () => {
    return cineValue?.cineGroup.map((item) => (
      <MenuItem key={item.maCumRap} value={item.maCumRap}>
        {item.tenCumRap}
      </MenuItem>
    ));
  };

  return (
    <div>
      <Modal
        open={openScheduleModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tạo lịch chiếu
          </Typography>
          {serverError ? (
            <Alert severity="error" sx={{ mt: 2 }}>
              {serverError}
            </Alert>
          ) : (
            ""
          )}
          <Formik>
            <Box sx={{ mt: 2 }} component="form" onSubmit={handleSubmit}>
              <FormControl fullWidth className="form__input-wrapper">
                <FormLabel htmlFor="cine-system">Hệ thống rạp</FormLabel>
                <Select
                  id="cine-system"
                  name="heThongRap"
                  onChange={handleChangeCineSystem}
                  onBlur={handleBlur}
                  error={errors.maRap && touched.heThongRap ? true : false}
                >
                  {renderCineSystem()}
                </Select>
                {errors.maRap && <FormHelperText error>{errors.maRap}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth className="form__input-wrapper">
                <FormLabel htmlFor="cine-group">Cụm thống rạp</FormLabel>
                <Select
                  id="cine-group"
                  name="cumRap"
                  onChange={handleChangeCineGroup}
                  onBlur={handleBlur}
                  error={errors.maRap && touched.cumRap ? true : false}
                >
                  {renderCineGroup()}
                </Select>
                {errors.maRap && <FormHelperText error>{errors.maRap}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth className="form__input-wrapper">
                <FormLabel htmlFor="movie-schedule">Ngày chiếu giờ chiếu</FormLabel>
                <DateTimePicker
                  id="movie-schedule"
                  name="ngayChieuGioChieu"
                  value={value}
                  onChange={handleChangeDateTime}
                  onBlur={handleBlur}
                  renderInput={(params) => <TextField {...params} />}
                  error={errors.ngayChieuGioChieu && touched.ngayChieuGioChieu ? true : false}
                />
                {errors.ngayChieuGioChieu && touched.ngayChieuGioChieu && (
                  <FormHelperText error>{errors.ngayChieuGioChieu}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth className="form__input-wrapper">
                <FormLabel htmlFor="ticket-price">Giá vé</FormLabel>
                <TextField
                  type="number"
                  name="giaVe"
                  id="ticket-price"
                  variant="outlined"
                  fullWidth
                  InputProps={{ inputProps: { min: 0 } }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.giaVe && touched.giaVe ? true : false}
                />
                {errors.giaVe && touched.giaVe && (
                  <FormHelperText error>{errors.giaVe}</FormHelperText>
                )}
              </FormControl>
              <SubmitButton sx={{ py: 1, mt: 2 }}>Tạo lịch chiếu</SubmitButton>
            </Box>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

export default ScheduleModal;
