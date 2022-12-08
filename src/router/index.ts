import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GameView from "@/views/GamesView.vue";
import HomeView from "@/views/HomeView.vue";
import ImageTuner from "@/components/ImageTuner.vue";
import ComponentsButtonView from "@/views/ComponentsButtonView.vue";
import ComponentsAlertView from "@/views/ComponentsAlertView.vue";
import ComponentsInputView from "@/views/ComponentsInputView.vue";
import GameLevelOneView from "@/views/GameLevelOneView.vue";
import GameLevelOneQuizView from "@/views/GameLevelOneQuizView.vue";
import GameLevelSixView from "@/views/GameLevelSixView.vue";
import GameLevelSixQuizView from "@/views/GameLevelSixQuizView.vue";
import GameLevelSevenView from "@/views/GameLevelSevenView.vue";
import GameLevelSevenQuizView from "@/views/GameLevelSevenQuizView.vue";
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
import GameLevelFourView from "@/views/GameLevelFourView.vue";
import GamesLevelFourView from "@/views/GameLevelFourQuizView.vue";
import GameFirst from "@/stages/GameFirst.vue";
import GameSecond from "@/stages/GemaSecond.vue";
import GameThird from "@/stages/GameThird.vue";
import GameFour from "@/stages/GameFour.vue";
import GameSix from "@/stages/GameSix.vue";

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
    component: GameLevelOneView,
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
  {
    path: "/game/4",
    name: "games-level-4-view",
    component: GameLevelFourView,
    props: true,
  },
  {
    path: "/game/4/quiz",
    name: "games-level-4-quiz-view",
    component: GamesLevelFourView,
    props: true,
  },
  {
    path: "/game/6",
    name: "games-level-6-view",
    component: GameLevelSixView,
    props: true,
  },
  {
    path: "/game/6/quiz",
    name: "games-level-6-quiz-view",
    component: GameLevelSixQuizView,
    props: true,
  },
  {
    path: "/game/7",
    name: "games-level-7-view",
    component: GameLevelSevenView,
    props: true,
  },
  {
    path: "/game/7/quiz",
    name: "games-level-7-quiz-view",
    component: GameLevelSevenQuizView,
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
  {
    path: "/game/stage/1-1",
    name: "stage-1-1",
    component: GameFirst,
  },
  {
    path: "/game/stage/1-2",
    name: "stage-1-2",
    component: GameSecond,
  },
  {
    path: "/game/stage/1-3",
    name: "stage-1-3",
    component: GameThird,
  },
  {
    path: "/game/stage/1-4",
    name: "stage-1-4",
    component: GameFour,
  },
  {
    path: "/game/stage/4-2",
    name: "stage-4-2",
    component: GameSix,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
