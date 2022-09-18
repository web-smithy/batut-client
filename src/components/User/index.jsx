import "./style.scss";
import React, { useContext } from "react";
import { ContextUser } from "../store/context";
import userPlaceholder from "../../assets/img/user_placeholder.png";

function User() {
  const { user, setUser } = useContext(ContextUser);
  const avatarImg = () => {
    return user.photo_url || userPlaceholder;
  };

  return (
    <section className="user">
      <div className="container">
        <div className="user-wrap">
          <div className="user-img">
            <img className="user-img__avatar" src={avatarImg()} />
          </div>
          <h4 className="title-h4 user-name">{user.first_name}</h4>
        </div>
      </div>
    </section>
  );
}

export default User;
