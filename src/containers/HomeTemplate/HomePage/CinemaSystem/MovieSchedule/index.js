import Image from "@/components/Image";
import { Grid } from "@mui/material";
import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";
import "./MovieSchedule.scss";

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
    <Grid container spacing={2} className="movie-schedule-card">
      <Grid item xs={3} md={2}>
        <Image src={movie.hinhAnh} alt={movie.tenPhim} />
      </Grid>
      <Grid item xs={9} md={10} className="movie-schedule__info">
        <p className="movie-schedule__movie-name">{movie.tenPhim}</p>
        <p>{cinemaGroup.diaChi}</p>
        <Grid container className="movie-schedule__schedule-list">
          {renderSchedule()}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieSchedule;
