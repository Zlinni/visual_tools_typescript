import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// createWebHashHistory,
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:type",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

export default router;
