import React from 'react';
import PropTypes from 'prop-types';
import TelegramLoginButton from 'telegram-login-button';
import { useNavigate } from 'react-router-dom';
import { addUserName } from '../helper';

function TelegramBtn({ setUser }) {
  const navigate = useNavigate();
  const handelLogin = (user) => {
    addUserName(user);
    setUser(user);
    if (user) {
      navigate('/profile');
    }
  };

  return (
    <TelegramLoginButton
      botName={import.meta.env.VITE_BOT_USERNAME}
      dataOnauth={handelLogin}
    />
  );
}

TelegramBtn.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default TelegramBtn;
