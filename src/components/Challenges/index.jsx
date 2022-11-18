import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBell } from '@fortawesome/free-solid-svg-icons';
import formatTime from '../helper/moment';

function Challenges({ challenges, setSelectedChallenge }) {
  const generateRandomColor = () => {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    if (randomColor.length !== 7) {
      randomColor = generateRandomColor();
    }
    return randomColor;
  };

  const handleChallengeSelect = (challenge) => {
    setSelectedChallenge(challenge);
  };

  return (
    <section className="challenges">
      <div className="container">
        <h3 className="title-h3 challenges-title">Available challenges</h3>
        <p className="challenges-txt">
          Accept one of these challenges to start!
        </p>
        <div className="challenges-list row m-15">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="column col-xl-6 col-l-6 col-m-12"
            >
              <button
                type="button"
                onClick={() => handleChallengeSelect(challenge)}
                className="challenges-item"
                style={{ backgroundColor: generateRandomColor() }}
              >
                <div className="challenges-item__wrap">
                  <div className="challenges-item__info">
                    <h4 className="title-h4 challenges-item__title">
                      {challenge.name}
                    </h4>
                    <p className="challenges-item__txt">
                      {challenge.description}
                    </p>
                    <div className="challenges-item__info-time">
                      <p>
                        <FontAwesomeIcon
                          className="challenges-item__info-icon"
                          icon={faClock}
                        />
                        {challenge.days}
                        {' '}
                        days
                      </p>
                      <p>
                        <FontAwesomeIcon
                          className="challenges-item__info-icon"
                          icon={faBell}
                        />
                        at
                        {' '}
                        {formatTime(challenge.notify_at)}
                      </p>
                    </div>
                  </div>
                  <div className="challenges-item__img">
                    <span>{challenge.emoji}</span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Challenges.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    days: PropTypes.number,
    notify_at: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    public: PropTypes.number,
    emoji: PropTypes.string,
  })).isRequired,
  setSelectedChallenge: PropTypes.func.isRequired,
};

export default Challenges;
