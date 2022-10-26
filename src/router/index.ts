import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GameView from "@/views/GamesView.vue";
import ComponentsView from "@/views/ComponentsView.vue";
import ImageTuner from "@/components/ImageTuner.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "image-tuner",
    component: ImageTuner,
  },
  {
    path: "/game/:name",
    name: "games-view",
    component: GameView,
    props: true,
  },
  {
    path: "/components/:name",
    name: "components-view",
    component: ComponentsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
