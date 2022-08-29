import "./style.scss";
import React, { useContext } from "react";
import { ContextUser } from "../store/context";
import Logo from "../Logo";
import store from "../../../store.json";
import logout from "../../assets/img/icon/logout.svg";
import { Link } from "react-router-dom";
import { removeUser } from "../helper";

function Header() {
  const { user, setUser } = useContext(ContextUser);

  const renderItemMenu = (item) => {
    return (
      <li className="menu-list__item">
        <a className="menu-list__item-link underline-one" href="#">
          {item}
        </a>
      </li>
    );
  };

  const handelLogout = () => {
    removeUser();
    setUser(null);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap flex-between">
          <div className="logo-wrap">
            <a href="/">
              <Logo />
            </a>
          </div>
          <nav className="nav">
            <ul className="menu-list flex">{store.menu.map(renderItemMenu)}</ul>
          </nav>
          {user ? (
            <div className="logout">
              <Link className="profile-link" to="/profile">
                Profile
              </Link>
              <button className="logout-btn" onClick={handelLogout}>
                <img className="logout-btn__img" src={logout}></img>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
