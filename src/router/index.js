import { NotFoundView, HomeView, DetailsView } from "../views";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user/:id",
    name: "user",
    component: DetailsView,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFoundView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
