import "./style.scss";
import { HashLink } from "react-router-hash-link";
import Logo from "../Logo";
import store from "../../../store.json";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ContextUser } from "../store/context";
import Logout from "../Logout";

function Header({ isMenuShown = false }) {
  const { user, setUser } = useContext(ContextUser);

  const renderItemMenu = (item, i) => {
    return (
      <li key={i} className="menu-list__item">
        <HashLink
          className="menu-list__item-link underline-one"
          to={`#${item}`}
        >
          {item}
        </HashLink>
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
          {isMenuShown ? (
            <nav className="nav">
              <ul className="menu-list flex">
                {store.menu.map(renderItemMenu)}
              </ul>
            </nav>
          ) : (
            ""
          )}

          {user ? <Logout /> : ""}
        </div>
      </div>
    </header>
  );
}

export default Header;
