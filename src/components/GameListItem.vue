<script setup lang="ts">
import { defineProps } from "vue";
import { GameItem } from "@/types";
const props = defineProps<{
  game: GameItem;
}>();

import { useGameStore } from "@/store/game";
const gameStore = useGameStore();
</script>
<style scoped>
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  background-color: #fafafa;
  padding-right: 15px;
  gap: 2rem;
  border: 1px solid #aaaaaa;
  border-top: 0px;
}

.list-item .list-item-words {
  width: 100%;
}

.list-item .list-item-name {
  font-size: 2rem;
  font-weight: bold;
}

.list-item .list-item-diff {
  color: #4e4e4e;
}

.list-item .list-item-easy {
  color: #4e4e4e;
}

.list-item .list-item-medium {
  color: #00939c;
}

.list-item .list-item-hard {
  color: #a1c754;
}

.list-item .list-item-icon {
  height: 90px;
  width: 90px;
  background-color: #4e4e4e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: #fafafa;
}

.list-item .list-item-icon-medium {
  background-color: #00939c;
  color: #fafafa;
}

.list-item .list-item-icon-hard {
  background-color: #a1c754;
}

.list-item .list-item-end button {
  background-color: #00939c;
  color: #fafafa;
  border: none;
}

.list-item .list-item-end button:hover {
  background-color: #016f75;
  color: #fafafa;
  border: none;
  cursor: pointer;
}

.list-item .list-item-end .completed {
  background-color: #3d2c54;
  color: #fafafa;
}

.list-item .list-item-end .completed:hover {
  background-color: #181121;
}
</style>
<template>
  <div class="list-item">
    <div
      class="list-item-icon list-item-icon-hard"
      v-if="props.game.gameDifficulty == 'Master'"
    >
      {{ props.game.gameStage }}
    </div>
    <div
      class="list-item-icon list-item-icon-medium"
      v-else-if="game.gameDifficulty == 'Intermediate'"
    >
      {{ props.game.gameStage }}
    </div>
    <div class="list-item-icon" v-else>{{ props.game.gameStage }}</div>
    <div class="list-item-words">
      <div class="list-item-name">
        {{ props.game.gameName }}
        <span
          class="text-color-vue-dark"
          v-show="gameStore.completed.includes(props.game.gameId)"
          >COMPLETED!
        </span>
      </div>
      <div class="list-item-description">{{ props.game.gameDescription }}</div>
      <div
        class="list-item-diff list-item-hard"
        v-if="props.game.gameDifficulty == 'Master'"
      >
        {{ props.game.gameDifficulty }}
      </div>
      <div
        class="list-item-diff list-item-medium"
        v-else-if="props.game.gameDifficulty == 'Intermediate'"
      >
        {{ props.game.gameDifficulty }}
      </div>
      <div class="list-item-diff list-item-easy" v-else>
        {{ props.game.gameDifficulty }}
      </div>
    </div>
    <router-link :to="'../game/' + props.game.gameStage">
      <div class="list-item-end">
        <button
          :class="{
            completed: gameStore.completed.includes(props.game.gameId),
          }"
        >
          Let's GO
        </button>
      </div></router-link
    >
  </div>
</template>
