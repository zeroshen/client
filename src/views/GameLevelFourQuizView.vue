<script setup lang="ts">
import GameFive from "@/stages/GameFive.vue";
import GameSix from "@/stages/GameSix.vue";
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const current = 0;
    return { current };
  },
  computed: {},
  methods: {
    next() {
      this.current += 1;
    },
    finish() {
      //gameStore.add(1004);
      this.$router.push({ name: "games-view" });
      console.log("finished");
    },
  },
});
</script>
<style scoped>
.game-view {
  flex: 1;
  min-height: 100%;
}
.game-quiz {
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2rem;
}
</style>
<template>
  <section class="game-view">
    <div class="game-quiz game-quiz-ready">
      <GameFive v-show="current == 0" @next="next"></GameFive>
      <GameSix
        v-show="current == 1"
        @next="next"
        @finished="finish"
        finished
      ></GameSix>
    </div>
  </section>
</template>
