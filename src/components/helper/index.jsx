// local storage
const getUser = () => {
  return JSON.parse(localStorage.getItem("me"));
};

const addUserName = (info) => {
  localStorage.setItem("me", JSON.stringify(info));
};

const removeUser = () => {
  localStorage.removeItem("me");
};

export { getUser, addUserName, removeUser };
