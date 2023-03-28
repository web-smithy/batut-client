import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import ContextUser from '../../components/store/context';
import Chart from '../../components/Chart';
import formatTime from '../../components/helper/moment';

function Webapp() {
  const [user] = useContext(ContextUser);
  const navigate = useNavigate();
  const [acceptances, setAcceptances] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/acceptances`, {
      headers: new Headers({
        'init-data': window.Telegram.WebApp.initData,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setAcceptances(json);
      }).catch((error) => console.log(error));
  }, [selectedChallenge]);

  const renderAcceptancesItem = (acceptance) => (
    <div key={acceptance.id} className="acceptances-item">
      <div className="acceptances-item__img">
        <span>{acceptance.emoji}</span>
      </div>
      <h4 className="title-h4 acceptances-item__title">{acceptance.name}</h4>
      <Chart notifications={acceptance.notifications} days={acceptance.days} />
      <p className="acceptances-item__txt">{acceptance.description}</p>
      <p className="acceptances-item__time">
        <FontAwesomeIcon
          className="acceptances-item__time-icon"
          icon={faBell}
        />
        {' '}
        at
        {' '}
        {formatTime(acceptance.notify_at)}
      </p>
    </div>
  );

  return (
    <div style={{ backgroundColor: 'blue', height: '100vh' }}>
      {acceptances
        .filter((acceptance) => acceptance.status === 'in_progress')
        .map(renderAcceptancesItem)}
    </div>
  );
}

export default Webapp;
