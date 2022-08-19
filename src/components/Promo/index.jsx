import "./style.scss";
import promo__1 from "../../assets/img/promo_1.svg";
import promo__2 from "../../assets/img/promo_2.png";
import TelegramBtn from "../../components/TelegramBtn";

function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-wrap flex-column--center">
          <h1 className="title-h2">
            Create <span className="txt--orange">challenges.</span>
          </h1>
          <p className="title-h1 promo-title">Stay motivated.</p>
          <TelegramBtn />
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
