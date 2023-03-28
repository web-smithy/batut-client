import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Chart from '../../components/Chart';
import formatTime from '../../components/helper/moment';

function Webapp() {
  return (
    <div className="acceptances-item" style={{ borderRadius: '0', height: '100vh' }}>
      <div className="acceptances-item__img">
        <span style={{ fontSize: '30px' }}>📚</span>
      </div>
      <h4 className="title-h4 acceptances-item__title" style={{ fontSize: '30px' }}>Running</h4>
      <Chart
        notifications={[
          { id: 1, status: 'sent' }]}
        days={10}
      />
      <p className="acceptances-item__txt">Running for 10 days</p>
      <p className="acceptances-item__time">
        <FontAwesomeIcon
          className="acceptances-item__time-icon"
          icon={faBell}
        />
        {' '}
        at
        {' '}
        {formatTime('07:00:00')}
      </p>
    </div>
  );
}

export default Webapp;
