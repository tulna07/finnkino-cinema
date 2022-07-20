import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faSnapchat,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
import Image from "@/components/Image";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Grid container id="footer__container">
        <Grid container>
          <a
            className="footer__app-item"
            href="https://apps.apple.com/app/finnkino-leffa/id1616672209?l"
          >
            <Image src="https://media.finnkino.fi/Files/responsive/footer/appstore_small.png" />
          </a>
          <a
            className="footer__app-item"
            href="https://media.finnkino.fi/Files/responsive/footer/googleplay_small.png"
          >
            <Image src="https://media.finnkino.fi/Files/responsive/footer/googleplay_small.png" />
          </a>
        </Grid>
        <Grid container>
          <div className="footer__list-item col-lg-3 mb-5">
            <p className="footer__list-title">Finnkino</p>
            <a className="footer__list-link" href="https://www.finnkino.fi/en/teatterit">
              Cinemas{" "}
            </a>
            <a className="footer__list-link" href="http://www.finnkinob2b.fi/">
              B2B{" "}
            </a>
            <a className="footer__list-link" href="https://www.finnkino.fi/en/rekry">
              Jobs{" "}
            </a>
            <a className="footer__list-link" href="https://www.finnkino.fi/en/tietoa-finnkinosta">
              Finnkino Oy
            </a>
          </div>
          <div className="footer__list-item col-lg-3 mb-5">
            <p className="footer__list-title">Customer service</p>
            <a className="footer__list-link" href="https://www.finnkino.fi/en/asiakaspalvelu/">
              Contact us{" "}
            </a>
            <a className="footer__list-link" href="https://www.finnkino.fi/en/faq">
              FAQ{" "}
            </a>
          </div>
          <div className="footer__list-item col-lg-3 mb-5">
            <p className="footer__list-title">Web shop</p>
            <a className="footer__list-link" href="https://www.finnkino.fi/en/tietosuoja">
              Privacy
            </a>
            <a
              className="footer__list-link"
              href="https://www.finnkino.fi/en/verkkokauppa/verkkokaupan-kayttoehdot"
            >
              Terms and conditions{" "}
            </a>
            <a
              className="footer__list-link"
              href="https://www.finnkino.fi/en/verkkokauppa/finnkino-lab-ehdot"
            >
              Terms of Finnkino Lab{" "}
            </a>
          </div>
          <div className="footer__list-item list--social col-lg-3">
            <p className="footer__list-title">Follow us on Social Media</p>
            <a className="footer__list-link" href="https://www.instagram.com/finnkino_fi">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="footer__list-link" href="https://www.instagram.com/finnkino_fi">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="footer__list-link" href="https://www.facebook.com/finnkino">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="footer__list-link" href="https://www.snapchat.com/add/finnkino">
              <FontAwesomeIcon icon={faSnapchat} />
            </a>
            <a className="footer__list-link" href="https://www.linkedin.com/company/48910/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="footer__list-link" href="https://www.youtube.com/finnkinosuomi">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </Grid>
        <Grid container>
          <Image src="https://media.finnkino.fi/files/responsive/footer/maksutavat_footer_800x130_u.png" />
        </Grid>
        <p className="footer__rights pt-5 pb-5">Finnkino Oy - All rights reserved</p>
      </Grid>
    </footer>
  );
}

export default Footer;
