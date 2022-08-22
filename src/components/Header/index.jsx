import "./style.scss";
import Logo from "../Logo";
import store from "../../../store.json";
import logout from "../../assets/img/icon/logout.svg";

function Header() {
  const renderItemMenu = (item) => {
    return (
      <li className="menu-list__item">
        <a className="menu-list__item-link" href="#">
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
            <a href="/">
              <Logo />
            </a>
          </div>
          <nav className="nav">
            <ul className="menu-list flex">{store.menu.map(renderItemMenu)}</ul>
          </nav>
          <button>
            <img src={logout}></img>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
