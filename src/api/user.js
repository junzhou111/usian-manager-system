import request from "../utils/request";

// 登录方法
export const login = (data = {}) => {
  return request({
    url: "/admin/login",
    method: "POST",
    data,
  });
};

// 获取登录信息接口
export const getUserInfo =()=>{
  return request ({
    url:'/admin/getUserInfo',
    method:'GET'
  })
}
