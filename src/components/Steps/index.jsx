import "./style.scss";
import step_1 from "../../assets/img/step_1.png";
import step_2 from "../../assets/img/step_2.png";
import step_3 from "../../assets/img/step_3.png";

function Steps() {
  return (
    <section className="steps" id="deatails">
      <div className="container">
        <h2 className="title-h2 steps__title">How it works?</h2>
        <div className="steps__wrap">
          <div className="steps__item" data-aos="flip-up">
            <div className="steps__item-img">
              <img src={step_1} />
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
              <img src={step_2} />
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
              <img src={step_3} />
            </div>
            <div className="steps__item-info">
              <h3 className="title-h1 steps__item-info--title">Step 3</h3>
              <p className="steps__item-info--txt">
                Congratulations! You have activated the challenge, now you just
                need to make it every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
