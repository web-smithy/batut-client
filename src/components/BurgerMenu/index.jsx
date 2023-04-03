import './style.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import UserMenu from '../UserMenu';
import { handleScroll } from '../helper/index';

function BurderMenu({ servicesRef, aboutRef, detailsRef }) {
  const [isEnter, setIsEnter] = useState(false);
  const location = useLocation();

  const menu = [
    {
      name: 'services',
      ref: servicesRef,
    },
    {
      name: 'about',
      ref: aboutRef,
    },
    {
      name: 'details',
      ref: detailsRef,
    },
  ];

  const handleClick = () => {
    setIsEnter((value) => !value);
  };

  const renderItemBurgerMenu = (item, i) => (
    <li key={i} className="menu-burger__item">
      <Link
        className="menu-burger__item-link"
        to={`#${item.name}`}
        onClick={() => {
          handleScroll(item.ref.current);
        }}
      >
        {item.name}
      </Link>
    </li>
  );

  return (
    <>
      <div className="menu d--lg">
        <button
          type="button"
          className={isEnter ? 'menu-bar change' : 'menu-bar'}
          onClick={handleClick}
        >
          <div id="bar1" className="bar" />
          <div id="bar2" className="bar" />
          <div id="bar3" className="bar" />
        </button>
      </div>

      <CSSTransition
        in={isEnter}
        timeout={600}
        classNames="transition"
        unmountOnExit
      >
        <div className="menu-burger">
          {location.pathname === '/' ? (
            <div className="menu-burger__wrap">
              <ul className="menu-burger__list">
                {menu.map(renderItemBurgerMenu)}
              </ul>
              <UserMenu />
            </div>
          ) : (
            <div className="menu-burger__wrap">
              <UserMenu />
            </div>
          )}
        </div>
      </CSSTransition>
    </>
  );
}

BurderMenu.propTypes = {
  servicesRef: PropTypes.shape(
    { current: PropTypes.instanceOf(Element) },
  ),
  aboutRef: PropTypes.shape(
    { current: PropTypes.instanceOf(Element) },
  ),
  detailsRef: PropTypes.shape(
    { current: PropTypes.instanceOf(Element) },
  ),
};

BurderMenu.defaultProps = {
  servicesRef: null,
  aboutRef: null,
  detailsRef: null,
};

export default BurderMenu;
