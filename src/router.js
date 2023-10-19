import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import AboutUs from "./pages/AboutUs.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/chi-siamo",
    name: "chi-siamo",
    component: Contacts,
  },
  {
    path: "/contatti",
    name: "contatti",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };