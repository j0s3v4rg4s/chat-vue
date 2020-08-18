import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    redirect: "/sign-in"
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import(/* webpackChunkName: "SigIn" */ "@/views/SignIn.vue"),
    meta: { public: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const uns = firebase.auth().onAuthStateChanged(usr => {
    uns();
    const isPublic = to.matched.some(record => record.meta.public);
    debugger;
    if (isPublic && !usr) {
      next();
    } else if (isPublic && usr) {
      next("/");
    } else if (!isPublic && usr) {
      next();
    } else {
      next("/sign-in");
    }
  });
});

export default router;
