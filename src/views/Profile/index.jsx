import Header from "../../components/Header";
import Challenges from "../../components/Challenges";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { ContextUser } from "../../components/store/context";

function Profile() {
  let navigate = useNavigate();
  const { user, setUser } = useContext(ContextUser);

  useEffect(() => {
    console.log("profile", user);
    if (!user) {
      navigate("/");
    }

    fetch("https://api.batut.pp.ua/api/me", {
      headers: new Headers({
        "TG-AUTH": new URLSearchParams(user).toString(),
      }),
    }).then((res) => console.log(res));
    console.log(new URLSearchParams(user).toString());
  });

  return (
    <div className="main-wrapper">
      <Header />
      <Challenges />
    </div>
  );
}

export default Profile;
