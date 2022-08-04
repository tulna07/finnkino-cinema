import React from "react";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";

// Material UI
import { Grid, Typography } from "@mui/material";

//Components
import Image from "@/components/Image";

import "./style.scss";

function MovieSchedule({ movie, cinemaGroup }) {
  const renderSchedule = () => {
    return movie.lstLichChieuTheoPhim?.slice(0, 6).map((schedule, index) => (
      <Grid item key={index} xs={4}>
        <NavLink
          to={`/ticket-booking/${schedule.maLichChieu}`}
          className="movie-schedule__schedule-item"
        >
          {moment(schedule.ngayChieuGioChieu).format("D/M/YYYY hh:mm")}
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
        <Link to={`/movie-detail/${movie.maPhim}`}>
          <Typography variant="body1" className="movie-schedule__movie-name">
            {movie.tenPhim}
          </Typography>
        </Link>

        <Typography variant="body2">{cinemaGroup.diaChi}</Typography>

        <Grid container className="movie-schedule__schedule-list">
          {renderSchedule()}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieSchedule;
