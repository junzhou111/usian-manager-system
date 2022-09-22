import request from "../utils/request";

// 会员管理
// http://vue.mengxuegu.com/pro-api/member/list/search/1/20
// 供应商管理
// http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10
// page
// size
// data需要传的参数

// page=1 size=10为默认值
// data需要传的参数

const getNewlist = (page = 1, size = 10,data={}) => {
  return request({
    url: `member/list/search/${page}/${size}`,
    method: "POST",
    data
  });
};
const getNewgongying = (page = 1, size = 20,data={}) => {
  return request({
    url: `supplier/list/search/${page}/${size}`,
    method: "POST",
    data
  });
};

export default {
  getNewlist,
  getNewgongying,
};
