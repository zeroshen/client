<script setup lang="ts">
import NavList from "@/components/NavList.vue";
</script>

<style scoped>
.home-page {
  display: flex;
  flex: 1;
  min-height: 100%;
}

.components-list {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 150px;
}

.game-button-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
<template>
  <div class="home-page">
    <section class="components-list">
      <div>View the components:</div>
      <NavList style="padding-left: 0px; padding-top: 0px"></NavList>
    </section>
    <section class="game-button-container">
      <router-link to="../game">
        <div class="button">Start the Game!</div>
      </router-link>
    </section>
  </div>
</template>
