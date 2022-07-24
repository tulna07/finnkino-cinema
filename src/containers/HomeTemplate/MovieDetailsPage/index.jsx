import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAt, faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./style.scss";
import Image from "@/components/Image";
import actFetchMovieDetails from "@/redux/actions/movieDetails";
import Loader from "@/components/Loader";
import moment from "moment";

function MovieDetailsPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieDetails.data);
  console.log(data);
  const loading = useSelector((state) => state.movieDetails.loading);

  const movieID = useParams();

  useEffect(() => {
    dispatch(actFetchMovieDetails(movieID.id));
  }, []);

  const renderLoader = () => {
    if (loading) return <Loader />;
  };

  return (
    <>
      {renderLoader()}
      {data && (
        <div id="movie-detail-page">
          <Box>
            <Box
              className="movie-detail__img-wrapper"
              sx={{ height: { xs: "210px", sm: "420px", md: "630px" } }}
            >
              <div className="movie-detail__top-info">
                <Container className="movie-detail__top-info-wrapper container">
                  <div className="top-info__img">
                    <Image src={data.hinhAnh} alt={data.tenPhim} />
                  </div>
                  {/* Top info for PC screen */}
                  <div className="top-info__content hide-on-mobile-tablet">
                    <h3 className="top-info__content-title mb-3">{data.tenPhim}</h3>
                    <Button
                      variant="outlined"
                      size="large"
                      className="btn-wrapper btn-outline top-info__btn"
                      startIcon={<FontAwesomeIcon icon={faPlay} />}
                      href="https://www.youtube.com/"
                    >
                      Play Trailer
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      className="btn-wrapper btn-filled top-info__btn"
                      endIcon={<FontAwesomeIcon icon={faAnglesRight} />}
                    >
                      <Link to="/">Tickets</Link>
                    </Button>
                  </div>

                  {/* Top info for tablet + mobile screens */}
                  <Button
                    variant="contained"
                    size="large"
                    className="btn-wrapper btn-filled top-info__btn hide-on-pc"
                    endIcon={<FontAwesomeIcon icon={faAnglesRight} />}
                  >
                    <Link to="/">Tickets</Link>
                  </Button>
                </Container>
              </div>
            </Box>
            {/* Top desc for pc */}
            <div className="movie-detail__top-desc hide-on-mobile-tablet">
              <div className="movie-detail__desc-left">
                <p>
                  <FontAwesomeIcon className="movie-detail__desc-icon" icon={faHeart} />
                  Rating: {data.danhGia}
                </p>
                <p>{data.hot && "Hot"}</p>
              </div>
              <div className="movie-detail__desc-right">
                <Button
                  variant="contained"
                  size="small"
                  className="btn-wrapper movie-detail__desc-btn desc-btn--facebook"
                  startIcon={
                    <FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faFacebookF} />
                  }
                >
                  Share
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  className="btn-wrapper movie-detail__desc-btn desc-btn--twitter"
                  startIcon={
                    <FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faTwitter} />
                  }
                >
                  Tweet
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  className="btn-wrapper movie-detail__desc-btn desc-btn--whatsapp"
                  startIcon={
                    <FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faWhatsapp} />
                  }
                >
                  WhatsApp
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  className="btn-wrapper movie-detail__desc-btn desc-btn--email"
                  startIcon={
                    <FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faAt} />
                  }
                >
                  E-mail
                </Button>
              </div>
            </div>
          </Box>
          <Container maxWidth="md" className="movie-detail__content-wrapper container">
            <Typography
              className="top-info__content-title"
              sx={{ display: { xs: "block", sm: "none" } }}
              mb={2}
              variant="h3"
            >
              {data.tenPhim}
            </Typography>
            <Grid container spacing={2} className="movie-detail__content">
              <Grid item xs={12} md={7} className="movie-detail__syno">
                <h4 className="movie-detail__content-title">Mô tả</h4>
                <p>{data.moTa}</p>
              </Grid>
              <Grid item xs={12} md={5} className="movie-detail__details">
                <h4 className="movie-detail__content-title">Chi tiết</h4>
                <p>
                  Ngày công chiếu: {moment(data.ngayKhoiChieu).format("MMMM Do YYYY, h:mm:ss A")}
                </p>
              </Grid>
            </Grid>
          </Container>

          {/* Top info for tablet + mobile screens */}
          <div className="movie-detail__top-desc container hide-on-pc">
            <div className="movie-detail__desc-left">
              <p>
                <FontAwesomeIcon className="movie-detail__desc-icon" icon={faHeart} />
                Rating: {data.danhGia}
              </p>
              <p>{data.hot && "Hot"}</p>
            </div>
            <div className="movie-detail__desc-right">
              <Button
                variant="contained"
                size="small"
                className="btn-wrapper movie-detail__desc-btn desc-btn--facebook"
                startIcon={
                  <FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faFacebookF} />
                }
              >
                <Typography sx={{ display: { xs: "none", lg: "block", xl: "none" } }}>
                  Share
                </Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                className="btn-wrapper movie-detail__desc-btn desc-btn--twitter"
                startIcon={
                  <FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faTwitter} />
                }
              >
                <Typography sx={{ display: { xs: "none", lg: "block", xl: "none" } }}>
                  Tweet
                </Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                className="btn-wrapper movie-detail__desc-btn desc-btn--whatsapp"
                startIcon={
                  <FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faWhatsapp} />
                }
              >
                <Typography sx={{ display: { xs: "none", lg: "block", xl: "none" } }}>
                  WhatsApp
                </Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                className="btn-wrapper movie-detail__desc-btn desc-btn--email"
                startIcon={<FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faAt} />}
              >
                <Typography sx={{ display: { xs: "none", lg: "block", xl: "none" } }}>
                  E-mail
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetailsPage;
