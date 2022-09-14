import TelegramLoginButton from "telegram-login-button";
import { addUserName } from "../helper";

function TelegramBtn({ setUser }) {
  const handelLogin = (user) => {
    addUserName(user);
    setUser(user);
  };

  return (
    <TelegramLoginButton botName="batutnik_bot" dataOnauth={handelLogin} />
  );
}

export default TelegramBtn;
