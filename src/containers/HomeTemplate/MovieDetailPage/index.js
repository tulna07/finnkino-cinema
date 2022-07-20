import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faAt,
  faFilter,
  faHeart,
  faPlay,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./MovieDetailPage.scss";
import Image from "@/components/Image";
import images from "@/assets/images";

function MovieDetailPage() {
  return (
    <div id="movie-detail-page">
      <div className="movie-detail__img-wrapper">
        <div className="movie-detail__top-info">
          <Container className="movie-detail__top-info-wrapper container">
            <div className="top-info__img">
              <Image src={images.logo} alt />
            </div>
            <div className="top-info__content">
              <h3 className="top-info__content-title mb-3">data.tenPhim</h3>
              <Button
                variant="outlined"
                size="large"
                className="btn-wrapper btn-outline top-info__btn"
                startIcon={<FontAwesomeIcon icon={faPlay} />}
              >
                Play Trailer
              </Button>
              <Button
                variant="contained"
                size="large"
                className="btn-wrapper btn-filled top-info__btn"
                endIcon={<FontAwesomeIcon icon={faAnglesRight} />}
              >
                Tickets
              </Button>
            </div>
          </Container>
        </div>
        <div className="movie-detail__top-desc">
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
      <div className="movie-detail__content-wrapper">
        <div className="container">
          <div className="row">
            <div className="movie-detail__synop col-lg-7">
              <h4>Synopsis</h4>
              <p>data.moTa</p>
            </div>
            <div className="movie-detail__details col-lg-5">
              <h4>Details</h4>
              <p>Release Date: data.ngayKhoiChieu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-detail__ticket container">
        <h2>Get Tickets</h2>
        <div className="ticket__filter">
          <div className="ticket__filter-schedule row">
            <div className="form-group">
              <select className="form-control" name="" id="">
                <option>Choose area or cinema</option>
                <option>Rạp 3</option>
                <option>Rạp 4</option>
                <option>Rạp 9</option>
                <option>BHD Star Cineplex - 3/2</option>
                <option>BHD Star Cineplex</option>
                <option>CGV - Pandora City</option>
                <option>CNS - Quốc Thanh</option>
                <option>CineStar</option>
                <option>CNS - Quốc Thanh</option>
                <option>MegaGS - Cao Thắng</option>
                <option>MegaGS</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-control" name="" id="">
                <option>Today</option>
                <option>Tomorrow</option>
                <option>Tomorrow +1</option>
                <option>Tomorrow +2</option>
                <option>All day</option>
              </select>
            </div>
          </div>
          <div className="ticket__filter-more">
            <Button>
              <FontAwesomeIcon icon={faFilter} />
              Filter shows
            </Button>
            <div className="ticket__filter-popup">
              <div>
                <p>Concepts</p>
                <Button>2D</Button>
              </div>
              <div>
                <p>Event Cinema and special show types</p>
                <Button>
                  <FontAwesomeIcon icon={faUtensils} />
                  Catering
                </Button>
              </div>
              <div>
                <p>Subtitles</p>
                <Button>Finnish</Button>
                <Button>English</Button>
              </div>
              <div>
                <p>Languages</p>
                <Button>English</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket__cinemas">
          <div className="ticket__cinema-item">
            <h3>Tennispalatsi, Helsinki</h3>
            <div className="cinema-item__details">
              <p className="cinema-item__time">10:30</p>
              <div className="cinema-item__info">
                <h5>Tennispalatsi, Helsinki, sali 7</h5>
                <div>
                  <p>Language: Dubbed in Finnish</p>
                  <p>Subtitles: No Subtitles</p>
                </div>
                <div>
                  <Button>2D</Button>
                  <Button>
                    <FontAwesomeIcon icon={faUtensils} />
                    Catering
                  </Button>
                </div>
              </div>
              <div className="cinema-item__seat">
                <div>
                  <p>available: 121/121</p>
                  <a>Seat Plan</a>
                </div>
                <Link to="/websales">
                  <Button className="top-info__btn">
                    Tickets
                    <FontAwesomeIcon icon={faAnglesRight} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;
