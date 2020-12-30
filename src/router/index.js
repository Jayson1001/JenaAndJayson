import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
