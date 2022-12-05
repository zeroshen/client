<script setup lang="ts">
import GameFirst from "@/stages/GameFirst.vue";
import GameSecond from "@/stages/GemaSecond.vue";
import GameThird from "@/stages/GameThird.vue";
import GameFour from "@/stages/GameFour.vue";
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
      <GameFirst v-show="current == 0" @next="next"></GameFirst>
      <GameSecond v-show="current == 1" @next="next"></GameSecond>
      <GameThird v-show="current == 2" @next="next"></GameThird>
      <GameFour
        v-show="current == 3"
        @next="next"
        @finished="finish"
        finished
      ></GameFour>
    </div>
  </section>
</template>
