import Vue from "vue";
import VueRouter, { RouterLink, RouterView } from "vue-router";
import login from "../views/login/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/",
    name: "layout",
    component: () => import("../layout"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
