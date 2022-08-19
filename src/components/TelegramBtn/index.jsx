import TelegramLoginButton from "telegram-login-button";

function TelegramBtn() {
  return (
    <TelegramLoginButton
      botName="batutnik_bot"
      dataOnauth={(user) => console.log(user)}
    />
  );
}

export default TelegramBtn;
