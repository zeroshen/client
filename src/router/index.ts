import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GameView from "@/views/GamesView.vue";
import HomeView from "@/views/HomeView.vue";
//import ComponentsView from "@/views/ComponentsView.vue";
import ImageTuner from "@/components/ImageTuner.vue";
import ComponentsButtonView from "@/views/ComponentsButtonView.vue";
import ComponentsAlertView from "@/views/ComponentsAlertView.vue";
import ComponentsInputView from "@/views/ComponentsInputView.vue";
import ComponentsLevelOneView from "@/views/ComponentsLevelOneView.vue";
import ComponentsLinkView from "@/views/ComponentsLinkView.vue";
import ComponentsSpinnerView from "@/views/ComponentsSpinnerView.vue";
import ComponentsNavBarView from "@/views/ComponentsNavBarView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home-view",
    component: HomeView,
  },
  {
    path: "/game/:name",
    name: "games-view",
    component: GameView,
    props: true,
  },
  {
    path: "/components/Level1",
    name: "components-level-1-view",
    component: ComponentsLevelOneView,
    props: true,
  },
  /*Hard code need change later!*/
  {
    path: "/components/Button",
    name: "components-button-view",
    component: ComponentsButtonView,
    props: true,
  },
  {
    path: "/components/Alert",
    name: "components-alert-view",
    component: ComponentsAlertView,
    props: true,
  },
  {
    path: "/components/Input",
    name: "components-input-view",
    component: ComponentsInputView,
    props: true,
  },
  {
    path: "/components/Link",
    name: "components-link-view",
    component: ComponentsLinkView,
    props: true,
  },
  {
    path: "/components/Spinner",
    name: "components-spinner-view",
    component: ComponentsSpinnerView,
    props: true,
  },
  {
    path: "/components/NavBar",
    name: "components-navbar-view",
    component: ComponentsNavBarView,
    props: true,
  },
  {
    path: "/components/image",
    name: "components-image-view",
    component: ImageTuner,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
