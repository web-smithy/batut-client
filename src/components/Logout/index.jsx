import "./style.scss";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ContextUser } from "../store/context";
import logout from "../../assets/img/icon/logout.svg";
import { removeUser } from "../helper";

function Logout() {
  const { user, setUser } = useContext(ContextUser);

  const handelLogout = () => {
    // need to add navigate
    removeUser();
    setUser(null);
  };

  return (
    <div className="logout">
      <Link className="profile-link" to="/profile">
        Profile
      </Link>
      <button className="logout-btn" onClick={handelLogout}>
        <img className="logout-btn__img" src={logout}></img>
      </button>
    </div>
  );
}

export default Logout;
