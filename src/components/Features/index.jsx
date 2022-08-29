import "./style.scss";
import clock from "../../assets/img/icon/clock.png";
import add from "../../assets/img/icon/add.png";
import chart from "../../assets/img/icon/chart.png";
import prize from "../../assets/img/icon/prize.png";
import target from "../../assets/img/icon/target.png";
import task from "../../assets/img/icon/task.png";
function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Features</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="txt--gradient">adipisicing elit.</span> Incidunt,
          ipsam.
        </p>
        <div className="features-list">
          <div>
            <div className="features-list__item">
              <div className="features-list__img">
                <img src={clock} />
              </div>
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti.
              </p>
            </div>
          </div>
          <div>
            <div className="features-list__item">
              <div className="features-list__img">
                <img src={add} />
              </div>
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti.
              </p>
            </div>
          </div>
          <div>
            <div className="features-list__item">
              <div className="features-list__img">
                <img src={chart} />
              </div>
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti.
              </p>
            </div>
          </div>
          <div>
            <div className="features-list__item">
              <div className="features-list__img">
                <img src={prize} />
              </div>
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti.
              </p>
            </div>
          </div>
          <div>
            <div className="features-list__item">
              <div className="features-list__img">
                <img src={target} />
              </div>
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti.
              </p>
            </div>
          </div>
          <div>
            <div className="features-list__item">
              <div className="features-list__img">
                <img src={task} />
              </div>
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
