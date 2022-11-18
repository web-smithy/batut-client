import moment from 'moment';

const formatTime = (time) => moment(time, 'hh:mm:ss').format('HH:mm');

export default formatTime;
