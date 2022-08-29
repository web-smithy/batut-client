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
    </section>
  );
}

export default Promo;
