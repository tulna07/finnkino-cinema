import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAt, faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./MovieDetailsPage.scss";
import Image from "@/components/Image";
import actFetchMovieDetails from "@/redux/actions/movieDetails";
import Loader from "@/components/Loader";

function MovieDetailsPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieDetails.data);
  console.log(data);
  const loading = useSelector((state) => state.movieDetails.loading);

  const movieID = useParams();

  useEffect(() => {
    dispatch(actFetchMovieDetails(movieID.id));
  }, []);

  const renderMovieDetails = () => {
    if (loading) return <Loader />;
  };

  return (
    <div id="movie-detail-page">
      <div className="movie-detail__img-wrapper">
        <div className="movie-detail__top-info">
          <Container className="movie-detail__top-info-wrapper container">
            <div className="top-info__img">
              <Image src="data.hinhAnh" alt="data.tenPhim" />
            </div>
            {/* Top info for PC screen */}
            <div className="top-info__content hide-on-mobile-tablet">
              <h3 className="top-info__content-title mb-3">data.tenPhim</h3>
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
              className="btn-wrapper btn-filled top-info__btn"
              endIcon={<FontAwesomeIcon icon={faAnglesRight} />}
            >
              <Link to="/">Tickets</Link>
            </Button>
          </Container>
        </div>
        <div className="movie-detail__top-desc hide-on-mobile-tablet">
          <div className="movie-detail__desc-left">
            <p>
              <FontAwesomeIcon className="movie-detail__desc-icon" icon={faHeart} />
              Rating: data.danhGia
            </p>
            <p>data.hot "Hot"</p>
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
              startIcon={<FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faAt} />}
            >
              E-mail
            </Button>
          </div>
        </div>
      </div>
      <Container maxWidth="md" className="movie-detail__content-wrapper">
        <Grid container className="container">
          <Grid item xs={12} md={7} className="movie-detail__syno">
            <h4 className="movie-detail__content-title">Synopsis</h4>
            <p>data.moTa</p>
          </Grid>
          <Grid item xs={12} md={5} className="movie-detail__details">
            <h4 className="movie-detail__content-title">Details</h4>
            <p>Release Date: data.ngayKhoiChieu</p>
          </Grid>
        </Grid>
      </Container>
      <div className="movie-detail__top-desc hide-on-pc">
        <div className="movie-detail__desc-left">
          <p>
            <FontAwesomeIcon className="movie-detail__desc-icon" icon={faHeart} />
            Rating: data.danhGia
          </p>
          <p>data.hot "Hot"</p>
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
            startIcon={<FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faTwitter} />}
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
            startIcon={<FontAwesomeIcon className="movie-detail__desc-btn-icon" icon={faAt} />}
          >
            E-mail
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
