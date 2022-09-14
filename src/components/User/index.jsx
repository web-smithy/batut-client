import "./style.scss";
import React, { useContext } from "react";
import { ContextUser } from "../store/context";

function User() {
  const { user, setUser } = useContext(ContextUser);
  console.log(user);
}

export default User;
