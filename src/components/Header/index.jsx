import './style.scss';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import Logo from '../Logo';
import store from '../../../store.json';
import ContextUser from '../store/context';
import UserMenu from '../UserMenu';
import BurgerMenu from '../BurgerMenu';

function Header() {
  const { user, setUser } = useContext(ContextUser);
  const location = useLocation();

  const renderItemMenu = (item, i) => (
    <li key={i} className="menu-list__item">
      <HashLink
        className="menu-list__item-link underline-one"
        to={`#${item}`}
      >
        {item}
      </HashLink>
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
                {store.menu.map(renderItemMenu)}
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

export default Header;
