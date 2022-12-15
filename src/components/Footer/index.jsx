import './style.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Logo';
import WaveThrid from '../WaveThrid';

function Footer() {
  return (
    <>
      <WaveThrid />
      <footer className="footer">
        <div className="container">
          <div className="footer-wrap">
            <div className="footer-info">
              <div className="footer-telegram">
                <p className="footer-telegram__txt">Support</p>
                <FontAwesomeIcon
                  className="footer-telegram__icon"
                  icon={faTelegram}
                />
                {' '}
                <a
                  className="footer-telegram__name"
                  href="https://t.me/MarinaKovaleva259"
                >
                  Marina Kovaleva
                </a>
              </div>
              <p className="footer-copyright">
                © Copyright 2022, All Rights Reserved.
              </p>
            </div>
            <Logo />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
