import './style.scss';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import ContextUser from '../store/context';
import UserMenu from '../UserMenu';
import BurgerMenu from '../BurgerMenu';

function Header({ servicesRef, aboutRef, detailsRef }) {
  const [user] = useContext(ContextUser);
  const location = useLocation();

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

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

  const renderItemMenu = (item, i) => (
    <li key={i} className="menu-list__item">
      <Link
        className="menu-list__item-link underline-one"
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
    <header className="header">
      <div className="container">
        <div className="header-wrap flex-between">
          <div className="logo-wrap">
            <Link className="logo-link" to="/">
              <Logo />
            </Link>
          </div>
          <BurgerMenu />
          {location.pathname === '/' ? (
            <nav className="nav d--md">
              <ul className="menu-list flex">
                {menu.map(renderItemMenu)}
              </ul>
            </nav>
          ) : (
            ''
          )}
          {user ? <UserMenu isUserMenuMedia /> : ''}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
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

Header.defaultProps = {
  servicesRef: null,
  aboutRef: null,
  detailsRef: null,
};

export default Header;
