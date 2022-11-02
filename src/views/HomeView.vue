<script setup lang="ts"></script>

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
      <div>View the components.</div>
      <li><router-link to="../components/Button">Button</router-link></li>
      <li><router-link to="../components/Alert">Alert</router-link></li>
      <li><router-link to="../components/Input">Input</router-link></li>
      <li><router-link to="../components/Link">Link</router-link></li>
      <li><router-link to="../components/Spinner">Spinner</router-link></li>
      <li><router-link to="../components/NavBar">NavBar</router-link></li>
      <li>
        <router-link to="../components/TimePicker">TimePicker</router-link>
      </li>
      <li><router-link to="../components/Image">Images</router-link></li>
      <li><router-link to="../components/Card">Card</router-link></li>
    </section>
    <section class="game-button-container">
      <router-link to="../components/Level1">
        <div class="button">Start the Game!</div>
      </router-link>
    </section>
  </div>
</template>
