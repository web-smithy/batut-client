import "./style.scss";
import Logo from "../Logo";
import store from "../../../store.json";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ContextUser } from "../store/context";
import Logout from "../Logout";

function Header() {
  const { user, setUser } = useContext(ContextUser);

  const renderItemMenu = (item) => {
    return (
      <li className="menu-list__item">
        <a className="menu-list__item-link underline-one" href="#services">
          {item}
        </a>
      </li>
    );
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap flex-between">
          <div className="logo-wrap">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <nav className="nav">
            <ul className="menu-list flex">{store.menu.map(renderItemMenu)}</ul>
          </nav>
          {user ? <Logout /> : ""}
        </div>
      </div>
    </header>
  );
}

export default Header;
