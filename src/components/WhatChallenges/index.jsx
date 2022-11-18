import './style.scss';
import React from 'react';
import bicycle from '../../assets/img/bicycle.svg';
import WaveFirst from '../WaveFirst';

function WhatChallenges() {
  return (
    <>
      <WaveFirst />
      <section className="what-challenges" id="about">
        <div className="container-large">
          <div className="what-challenges__wrap">
            <div className="what-challenges__img" data-aos="zoom-in-right">
              <img src={bicycle} alt="bicycle" />
            </div>
            <ul className="what-challenges__list" data-aos="zoom-in-left">
              <h3 className="what-challenges__title">
                What&apos;s your challenges?
              </h3>
              <li className="what-challenges__list-item">Read it. Swim it.</li>
              <li className="what-challenges__list-item">
                Run it. Go to the gym.
              </li>
              <li className="what-challenges__list-item">
                Study it. Meditate.
              </li>
              <li className="what-challenges__list-item">
                Get up early. Walk it.
              </li>
              <li className="what-challenges__list-item">
                Limit social media. Cycle it.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatChallenges;
