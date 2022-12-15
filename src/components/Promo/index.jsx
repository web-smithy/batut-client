import './style.scss';
import React, { useContext } from 'react';
import ContextUser from '../store/context';
import promoLeft from '../../assets/img/promo_1.svg';
import promoRight from '../../assets/img/promo_2.png';
import TelegramBtn from '../TelegramBtn';

function Promo() {
  const [user, setUser] = useContext(ContextUser);
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-wrap flex-column--center">
          <h1 className="title-h2">
            Create
            {' '}
            <span className="txt--gradient">challenges.</span>
          </h1>
          <p className="title-h1 promo-title">Stay motivated.</p>
          {!user && <TelegramBtn setUser={setUser} />}
          <img className="promo-img__left" src={promoLeft} alt="Promo left" />
          <img
            className="promo-img__right"
            src={promoRight}
            alt="Promo right"
          />
        </div>
      </div>
    </section>
  );
}

export default Promo;
