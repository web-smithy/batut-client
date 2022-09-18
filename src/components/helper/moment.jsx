import moment from "moment";

const formatTime = (time) => {
  return moment(time, "hh:mm:ss").format("HH:mm");
};

export { formatTime };
