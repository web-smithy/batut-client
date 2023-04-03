// local storage
const getUser = () => JSON.parse(localStorage.getItem('me'));

const addUserName = (info) => {
  localStorage.setItem('me', JSON.stringify(info));
};

const removeUser = () => {
  localStorage.removeItem('me');
};

const handleScroll = (ref) => {
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
};

export {
  getUser, addUserName, removeUser, handleScroll,
};
