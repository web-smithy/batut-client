import "./style.scss";
import clock from "../../assets/img/icon/clock.png";
import add from "../../assets/img/icon/add.png";
import chart from "../../assets/img/icon/chart.png";
import prize from "../../assets/img/icon/prize.png";
import target from "../../assets/img/icon/target.png";
import task from "../../assets/img/icon/task.png";

function Services() {
  const servicesItemInfo = [
    {
      icon: clock,
      title: "Get a notification",
      text: "You'll receive notifications to help you achieve your goals.",
    },
    {
      icon: add,
      title: "Create own challenges",
      text: "You can create any challenge anywhere.",
    },
    {
      icon: chart,
      title: "Track challenges",
      text: "Keep track of the statistics of each challenges and get closer to its completion",
    },
    {
      icon: prize,
      title: "Get rewards",
      text: "Get rewarded for completing challenges that will help you complete them to the end.",
    },
    {
      icon: target,
      title: "Set yourself challenges",
      text: "Create your ideal life with life changing habits and be the best version of yourself!",
    },
    {
      icon: task,
      title: "Choose the best challenge for you",
      text: "Choose from the existing list of challenges and start doing it right now.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="title-h2 services-title">Services</h2>
        <p className="services-txt">
          Our application provides a
          <span className="txt--gradient"> range of services </span>
          for each chellenges.
        </p>
        <div className="services-list m-15">
          {servicesItemInfo.map((item) => {
            return (
              <div className="column col-xl-4 col-l-6 col-s-12">
                <div className="services-list__item">
                  <div className="services-list__img">
                    <img src={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="services-list__txt">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
