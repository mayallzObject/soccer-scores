import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:id",
    name: "MatchDetails",
    component: lazyLoad("MatchDetails"),
    props: true
  },
  {
    path: "/teams",
    name: "Teams",
    component: lazyLoad("Teams")
  },
  {
    path: "/teams/:id",
    name: "TeamDetails",
    component: lazyLoad("TeamDetails"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
