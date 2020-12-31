import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";


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
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
