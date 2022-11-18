import './style.scss';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React, { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ notifications, days }) {
  const [daysLeft, setDaysLeft] = useState(days - notifications.length);

  const getCountByStatus = (status) => {
    const arrayNotificationStatus = notifications.filter((notification) => notification.status === status);
    return arrayNotificationStatus.length;
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: ['Fail', 'Done', 'Sent', 'Left'],
    datasets: [
      {
        data: [
          getCountByStatus('fail'),
          getCountByStatus('done'),
          getCountByStatus('sent'),
          daysLeft,
        ],
        backgroundColor: ['#F7464A', '#4BC0C0', '#FFCE56', '#CBD5E1'],
        borderColor: ['#F7464A', '#4BC0C0', '#FFCE56', '#CBD5E1'],
        borderWidth: 1,
        cutout: 90,
      },
    ],
  };

  return (
    <div className="chart chart__relative">
      <Doughnut data={data} options={options} />
      <div className="chart__absolute">
        <p className="chart__days">
          {daysLeft}
          {' '}
          days left
        </p>
      </div>
    </div>
  );
}

export default Chart;
