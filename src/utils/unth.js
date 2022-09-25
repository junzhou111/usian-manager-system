const TokenKey = "token";
const UserInfoKey = "userInfo";

// 设置token
export const setToken = (token) => {
  localStorage.setItem(TokenKey, token);
};

// 获取token
export const getToken = () => {
  return localStorage.getItem(TokenKey);
};

// 设置用户信息
export const setUserInfo = (userInfo) => {
  localStorage.setItem(UserInfoKey, JSON.stringify(userInfo));
};

// 获取用户信息
export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem(UserInfoKey) || "{}");
};

// 删除token以及用户信息
export const removeTokenAndUserInfo = () => {
  localStorage.removeItem(TokenKey);
  localStorage.removeItem(UserInfoKey);
};
