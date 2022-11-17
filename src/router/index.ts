import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GameView from "@/views/GamesView.vue";
import HomeView from "@/views/HomeView.vue";
import ImageTuner from "@/components/ImageTuner.vue";
import ComponentsButtonView from "@/views/ComponentsButtonView.vue";
import ComponentsAlertView from "@/views/ComponentsAlertView.vue";
import ComponentsInputView from "@/views/ComponentsInputView.vue";
import GamesLevelOneView from "@/views/GamesLevelOneView.vue";
import GameLevelOneQuizView from "@/views/GameLevelOneQuizView.vue";
import GamesLevelThreeView from "@/views/GameLevelThreeView.vue";
import GameLevelThreeQuizView from "@/views/GameLevelThreeQuizView.vue";
import ComponentsLinkView from "@/views/ComponentsLinkView.vue";
import CardTuner from "@/components/CardTuner.vue";
import ComponentsSpinnerView from "@/views/ComponentsSpinnerView.vue";
import ComponentsNavBarView from "@/views/ComponentsNavBarView.vue";
import GridComponentView from "@/components/GridTuner.vue";
import ComponentsPopOverView from "@/views/ComponentsPopOverView.vue";
import AudioPlayerTuner from "@/components/AudioPlayerTuner.vue";
import VideoPlayerTuner from "@/components/VideoPlayerTuner.vue";
import GameLevelTwoView from "@/views/GameLevelTwoView.vue";
import TemplateView from "@/views/TemplateView.vue";
import ComponentsBadgeView from "@/views/ComponentsBadgeView.vue";
import NavigationTuner from "@/components/NavigationTuner.vue";
import SampleCard from "@/components/SampleCard.vue";
import TextTuner from "@/components/TextTuner.vue";
import GameLevelTwoQuizView from "@/views/GameLevelTwoQuizView.vue";
import AspectRatio from "@/components/AspectRatio.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home-view",
    component: HomeView,
  },
  {
    path: "/game/",
    name: "games-view",
    component: GameView,
    props: true,
  },
  {
    path: "/template",
    name: "template-view",
    component: TemplateView,
    props: true,
  },
  {
    path: "/game/1",
    name: "games-level-1-view",
    component: GamesLevelOneView,
    props: true,
  },
  {
    path: "/game/1/quiz",
    name: "games-level-1-quiz-view",
    component: GameLevelOneQuizView,
    props: true,
  },
  {
    path: "/game/2",
    name: "games-level-2-view",
    component: GameLevelTwoView,
    props: true,
  },
  {
    path: "/game/2/quiz",
    name: "games-level-2-quiz-view",
    component: GameLevelTwoQuizView,
    props: true,
  },
  {
    path: "/game/3",
    name: "games-level-3-view",
    component: GamesLevelThreeView,
    props: true,
  },
  {
    path: "/game/3/quiz",
    name: "games-level-3-quiz-view",
    component: GameLevelThreeQuizView,
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
    path: "/components/Tab",
    name: "components-tab-view",
    component: ComponentsNavBarView,
    props: true,
  },
  {
    path: "/components/Badge",
    name: "components-badge-view",
    component: ComponentsBadgeView,
    props: true,
  },
  {
    path: "/components/PopOver",
    name: "components-pop-over-view",
    component: ComponentsPopOverView,
    props: true,
  },
  {
    path: "/components/image",
    name: "components-image-view",
    component: ImageTuner,
    props: true,
  },
  {
    path: "/components/card",
    name: "components-card-view",
    component: CardTuner,
    props: true,
  },
  {
    path: "/components/grid",
    name: "grid-tuner",
    component: GridComponentView,
    props: true,
  },
  {
    path: "/components/audio",
    name: "audio-player-tuner",
    component: AudioPlayerTuner,
    props: true,
  },
  {
    path: "/components/video",
    name: "video-player-tuner",
    component: VideoPlayerTuner,
    props: true,
  },
  {
    path: "/components/nav",
    name: "nav-tuner",
    component: NavigationTuner,
    props: true,
  },
  {
    path: "/components/sample",
    name: "sample-card",
    component: SampleCard,
    props: true,
  },
  {
    path: "/components/text",
    name: "text-tuner",
    component: TextTuner,
    props: true,
  },
  {
    path: "/components/aspectratio",
    name: "aspect-ratio-tuner",
    component: AspectRatio,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
