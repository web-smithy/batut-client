import './style.scss';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import ContextUser from '../store/context';
import logout from '../../assets/img/icon/logout.svg';
import { removeUser } from '../helper';

function UserMenu({ isUserMenuMedia = false }) {
  const navigate = useNavigate();
  const [setUser] = useContext(ContextUser);

  const handelLogout = () => {
    navigate('/');
    removeUser();
    setUser(null);
  };

  return (
    <div className={isUserMenuMedia ? 'user-menu d--md' : 'user-menu'}>
      <Link className="profile-link" to="/profile">
        Profile
      </Link>
      <button type="button" className="logout-btn" onClick={handelLogout}>
        <img className="logout-btn__img" src={logout} alt="Logout button" />
      </button>
    </div>
  );
}

UserMenu.propTypes = {
  isUserMenuMedia: PropTypes.bool.isRequired,
};

export default UserMenu;
