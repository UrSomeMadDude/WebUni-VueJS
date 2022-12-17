import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import HobbyView from "../views/Hobby/HobbyView.vue";
import HobbyDetails from "../views/Hobby/HobbyDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/hobby",
    name: "Hobby",
    component: HobbyView,
  },
  {
    path: "/hobby/:id",
    name: "HobbyDetails",
    component: HobbyDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
