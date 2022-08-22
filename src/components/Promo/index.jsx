import "./style.scss";
import promo__1 from "../../assets/img/promo_1.svg";
import promo__2 from "../../assets/img/promo_2.png";
import TelegramBtn from "../../components/TelegramBtn";
import { getUser, removeUser } from "../helper";

function Promo({ user, setUser }) {
  const handelLogout = () => {
    removeUser();
    setUser(null);
  };
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-wrap flex-column--center">
          <h1 className="title-h2">
            Create <span className="txt--gradient">challenges.</span>
          </h1>
          <p className="title-h1 promo-title">Stay motivated.</p>
          {user ? (
            <button onClick={handelLogout}>Logout</button>
          ) : (
            <TelegramBtn setUser={setUser} />
          )}
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
