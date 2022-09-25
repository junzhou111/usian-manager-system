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
    children: [
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/goods"),
      },
      {
        path: "/index",
        name: "index",
        component: () => import("../views/index"),
      },
      {
        path: "/member",
        name: "member",
        component: () => import("../views/member"),
      },
      {
        path: "/staff",
        name: "staff",
        component: () => import("../views/staff"),
      },
      {
        path: "/supplier",
        name: "supplier",
        component: () => import("../views/supplier"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
