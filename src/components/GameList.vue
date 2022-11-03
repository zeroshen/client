<script setup lang="ts">
import { defineProps } from "vue"; // needed if you don't want an error below
import { GameItem } from "@/types";
import GameListItem from "@/components/GameListItem.vue";
const props = defineProps<{
  gameList: GameItem[];
}>();
</script>

<style scoped>
.game-list {
  min-width: 100%;
  display: flex;
  justify-content: center;
}

#game-boxes {
  display: flex;
  flex-direction: column;
  min-width: 100%;
}
</style>

<template>
  <section class="game-list">
    <div id="game-boxes">
      <template v-for="game in props.gameList" :key="game.gameId">
        <game-list-item :game="game"></game-list-item>
      </template>
    </div>
  </section>
</template>
