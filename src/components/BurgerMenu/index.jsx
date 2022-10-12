import "./style.scss";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import store from "../../../store.json";
import UserMenu from "../UserMenu";

function BurderMenu() {
  const [isEnter, setIsEnter] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsEnter((value) => !value);
  };

  const renderItemBurgerMenu = (item, i) => {
    return (
      <li key={i} className="menu-burger__item">
        <HashLink className="menu-burger__item-link" to={`#${item}`}>
          {item}
        </HashLink>
      </li>
    );
  };

  return (
    <>
      <div className="menu d--lg">
        <button
          className={isEnter ? "menu-bar change" : "menu-bar"}
          onClick={handleClick}
        >
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </button>
      </div>

      <CSSTransition
        in={isEnter}
        timeout={600}
        classNames="transition"
        unmountOnExit
      >
        <div className="menu-burger">
          {location.pathname === "/" ? (
            <div className="menu-burger__wrap">
              <ul className="menu-burger__list">
                {store.menu.map(renderItemBurgerMenu)}
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

export default BurderMenu;
