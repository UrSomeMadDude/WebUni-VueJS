import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import HobbyView from "../views/Hobby/HobbyView.vue";
import HobbyDetails from "../views/Hobby/HobbyDetails.vue";
import ContactView from "../views/ContactView.vue";
import PhotoalbumView from "../views/PhotoalbumView.vue";
import UsersView from "../views/UsersView.vue";

const routes = [
  {
    path: "/",
    name: "Main",
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
    /* props: true, */
  },
  {
    path: "/photoalbum",
    name: "Photoalbum",
    component: PhotoalbumView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/users",
    name: "Users",
    component: UsersView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
