<script setup lang="ts"></script>
<style scoped>
.components-list {
  width: 20%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 50px;
}
ol,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
<template>
  <section class="components-list">
    <ul>
      <li><router-link to="../game/1">Level 1</router-link></li>
      <li><router-link to="../game/2">Level 2</router-link></li>
      <li><router-link to="../game/3">Level 3</router-link></li>
      <li><router-link to="../game/4">Level 4</router-link></li>
      <li><router-link to="../game/5">Level 5</router-link></li>
      <li><router-link to="../game/6">Level 6</router-link></li>
      <li><router-link to="../game/7">Level 7</router-link></li>
      <li><router-link to="../game/8">Level 8</router-link></li>
      <li><router-link to="../game/9">Level 9</router-link></li>
    </ul>
  </section>
</template>
