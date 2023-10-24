import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import AboutUs from "./pages/AboutUs.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/chi-siamo",
    name: "chi-siamo",
    component: AboutUs,
  },
  {
    path: "/contatti",
    name: "contatti",
    component: Contacts,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };