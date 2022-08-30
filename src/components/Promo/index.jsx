import "./style.scss";
import React, { useContext } from "react";
import { ContextUser } from "../store/context";
import promo__1 from "../../assets/img/promo_1.svg";
import promo__2 from "../../assets/img/promo_2.png";
import TelegramBtn from "../../components/TelegramBtn";

function Promo() {
  const { user, setUser } = useContext(ContextUser);
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-wrap flex-column--center">
          <h1 className="title-h2">
            Create <span className="txt--gradient">challenges.</span>
          </h1>
          <p className="title-h1 promo-title">Stay motivated.</p>
          {!user && <TelegramBtn setUser={setUser} />}
          <img className="promo-img__left" src={promo__1} alt="Promo picture" />
          <img
            className="promo-img__right"
            src={promo__2}
            alt="Promo picture"
          />
        </div>
      </div>

      <div className="banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 25 160 40"
          className="waves"
        >
          <defs>
            <path
              id="wave"
              d="M-150 53c30.77 0 59.538-20 90-20 31.077 0 60.256 20 90 20 30.77 0 59.23-20 90-20 30.77 0 59.23 20 90 20v20h-360z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" x="50" y="0" fill="#18222D" />
            <use xlinkHref="#wave" x="50" y="2" fill="#142940" />
            <use xlinkHref="#wave" x="50" y="4" fill="#E5E5E5" />
          </g>
        </svg>
      </div>
    </section>
  );
}

export default Promo;
