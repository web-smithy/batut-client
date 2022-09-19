import "./style.scss";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-info">
            <p className="footer-copyright">
              © Copyright 2022, All Rights Reserved.
            </p>
            <a className="footer-email" href="mailto: batut@gmail.com">
              <FontAwesomeIcon
                className="footer-email__icon"
                icon={faEnvelope}
              />{" "}
              batut@gmail.com
            </a>
          </div>
          <Logo />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
