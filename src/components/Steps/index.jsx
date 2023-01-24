import './style.scss';
import React from 'react';
import stepFirst from '../../assets/img/step_1.png';
import stepSecond from '../../assets/img/step_2.png';
import stepThird from '../../assets/img/step_3.png';
import WaveSecond from '../WaveSecond';

function Steps({ detailsRef }) {
  return (
    <>
      <WaveSecond />
      <section className="steps" id="details" ref={detailsRef}>
        <div className="container">
          <h2 className="title-h2 steps__title">How it works?</h2>
          <div className="steps__wrap">
            <div className="steps__item" data-aos="flip-up">
              <div className="steps__item-img">
                <img src={stepFirst} alt="First step is to create user profile" />
              </div>
              <div className="steps__item-info">
                <h3 className="title-h1 steps__item-info--title">Step 1</h3>
                <p className="steps__item-info--txt">
                  Click on Telegram button to create your profile.
                </p>
              </div>
            </div>
            <div className="steps__item" data-aos="flip-up">
              <div className="steps__item-img">
                <img src={stepSecond} alt="Second step is access to profile" />
              </div>
              <div className="steps__item-info">
                <h3 className="title-h1 steps__item-info--title">Step 2</h3>
                <p className="steps__item-info--txt">
                  Check out all the challenges and choose the one you want the
                  most.
                </p>
              </div>
            </div>
            <div className="steps__item" data-aos="flip-up">
              <div className="steps__item-img">
                <img src={stepThird} alt="Third step is choose challenge" />
              </div>
              <div className="steps__item-info">
                <h3 className="title-h1 steps__item-info--title">Step 3</h3>
                <p className="steps__item-info--txt">
                  Congratulations! You have activated the challenge, now you
                  just need to make it every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Steps;
