import Vue from "vue";
import Vuex from "vuex";
import { getToken, getUserInfo, setToken, setUserInfo } from "../utils/unth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken() || "",
    userInfo: getUserInfo() || "",
  },
  getters: {
    userInfo(state) {
      return state.userInfo;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      setToken(token);
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
      setUserInfo(userInfo);
    },
  },
  actions: {
    dissetToken({ commit }, payload) {
      commit("setToken", payload);
    },
    dissetUserInfo({ commit }, userInfo) {
      commit("setUserInfo", userInfo);
    },
  },
  modules: {},
});
