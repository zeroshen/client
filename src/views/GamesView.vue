<script setup lang="ts">
import { GameItem } from "@/types";
import GameList from "@/components/GameList.vue";
const gameStages: GameItem[] = [
  {
    gameId: 1001,
    gameName: "Introduction",
    gameDescription:
      "Introduction to basics of Vue.js and project setup with Intelij",
    gameDifficulty: "Beginner",
    gameStage: "1",
  },
  {
    gameId: 1002,
    gameName: "What is going on with HTML/CSS",
    gameDescription: "Introduction to HTML. And CSS boosting up HTML",
    gameDifficulty: "Beginner",
    gameStage: "2",
  },
  {
    gameId: 1003,
    gameName: "Components",
    gameDescription: "Introduction to componennts and vue templates",
    gameDifficulty: "Intermediate",
    gameStage: "3",
  },
  {
    gameId: 1004,
    gameName: "Components extended",
    gameDescription:
      "Customized components, like tabs, date picker, cards, grids",
    gameDifficulty: "Intermediate",
    gameStage: "4",
  },
  {
    gameId: 1005,
    gameName: "Components with vue binding",
    gameDescription: "Power up components with vue binding",
    gameDifficulty: "Intermediate",
    gameStage: "5",
  },
  {
    gameId: 1006,
    gameName: "REST api",
    gameDescription: "Introduction to REST api",
    gameDifficulty: "Master",
    gameStage: "6",
  },
  {
    gameId: 1007,
    gameName: "Database configuration",
    gameDescription: "Introduction to database",
    gameDifficulty: "Intermediate",
    gameStage: "7",
  },
  {
    gameId: 1008,
    gameName: "Fullstack",
    gameDescription: "Retrieve information from server api!",
    gameDifficulty: "Master",
    gameStage: "8",
  },
];
</script>
<style scoped>
.game-container {
  flex: 1;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
}

.game-container .game-body {
  width: 90%;
  min-height: 100%;
  border-top: 1px solid #aaaaaa;
}
</style>
<template>
  <div class="game-container">
    <div class="game-body">
      <game-list :game-list="gameStages"></game-list>
    </div>
  </div>
</template>
