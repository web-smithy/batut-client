import "./style.scss";
import clock from "../../assets/img/icon/clock.png";
import add from "../../assets/img/icon/add.png";
import chart from "../../assets/img/icon/chart.png";
import prize from "../../assets/img/icon/prize.png";
import target from "../../assets/img/icon/target.png";
import task from "../../assets/img/icon/task.png";

function Features() {
  const featuresItemInfo = [
    {
      icon: clock,
      title: "Lorem, ipsum dolor.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Deleniti.",
    },
    {
      icon: add,
      title: "Lorem, ipsum dolor.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Deleniti.",
    },
    {
      icon: chart,
      title: "Lorem, ipsum dolor.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Deleniti.",
    },
    {
      icon: prize,
      title: "Lorem, ipsum dolor.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Deleniti.",
    },
    {
      icon: target,
      title: "Lorem, ipsum dolor.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Deleniti.",
    },
    {
      icon: task,
      title: "Lorem, ipsum dolor.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Deleniti.",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="title-h2 features-title">Features</h2>
        <p className="features-txt">
          Lorem ipsum dolor sit amet consectetur
          <span className="txt--gradient">adipisicing elit.</span> Incidunt,
          ipsam.
        </p>
        <div className="features-list">
          {featuresItemInfo.map((item) => {
            return (
              <div>
                <div className="features-list__item">
                  <div className="features-list__img">
                    <img src={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
