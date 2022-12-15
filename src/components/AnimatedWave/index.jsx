import './style.scss';
import React from 'react';

function AnimatedWave() {
  return (
    <div className="animated-wave">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 25 160 40"
        className="waves"
      >
        <defs>
          <path
            id="wave"
            d="M-150 53c30.77 0 59.538-20 90-20 31.077 0 60.256 20 90 20 30.77 0 59.23-20 90-20 30.77 0 59.23 20 90 20v20h-360z"
          />
        </defs>
        <g>
          <use xlinkHref="#wave" x="50" y="0" fill="#18222D" />
          <use xlinkHref="#wave" x="50" y="2" fill="#142940" />
          <use xlinkHref="#wave" x="50" y="4" fill="#E5E5E5" />
        </g>
      </svg>
    </div>
  );
}

export default AnimatedWave;
