import axios from "axios";
import { Message } from "element-ui";
import store from "../store";
// 自定义错误提示信息
const excetionMessage = {
  1000: "用户名或者密码发生错误",
  2000: "xxx发生错误",
  3000: "",
};

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 获取vuex的token
    const token = store.state.token;
    // 当token存在时将token通过请求头的方式发送给后台
    if (token) config.headers.authorization = "Bearer" + token;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      return response.data.data;
    }
    if (response.status === 401) {
      // 对token进行一个过期处理
      return;
    }
    // 错误异常处理
    _showError(response.data.code, response.data.message);

    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
const _showError = (errorCode, message) => {
  let title;
  title = excetionMessage[errorCode] || message || "发生未知错误";
  Message.error(title);
};

export default service;
