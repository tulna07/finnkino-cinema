import Image from "@/components/Image";
import { Grid } from "@mui/material";
import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

function MovieSchedule({ movie, cinemaGroup }) {
  const renderSchedule = () => {
    return movie.lstLichChieuTheoPhim?.slice(0, 6).map((schedule, index) => (
      <Grid item key={index} xs={4}>
        <NavLink to="/" className="movie-schedule__schedule-item">
          {moment(schedule.ngayChieuGioChieu).format("hh:mm A")}
        </NavLink>
      </Grid>
    ));
  };
  return (
    <div className="movie-schedule__wrapper">
      <Image src={movie.hinhAnh} alt={movie.tenPhim} />
      <div className="movie-schedule__info">
        <p className="movie-schedule__movie-name">{movie.tenPhim}</p>
        <p>{cinemaGroup.diaChi}</p>
        <Grid container className="movie-schedule__schedule-list">
          {renderSchedule()}
        </Grid>
      </div>
    </div>
  );
}

export default MovieSchedule;
