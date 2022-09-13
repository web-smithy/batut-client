import "./style.scss";
import { Link } from "react-router-dom";

function Logout() {
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
