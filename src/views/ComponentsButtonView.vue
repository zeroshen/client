<script setup lang="ts"></script>

<style scoped>
.home-page {
  display: flex;
}
.components-list {
  width: 20%;
  display: flex;
  flex-direction: column;
}
.game-button-container {
  width: 80%;
}
code {
  padding: 10px;
  display: block;
  white-space: pre;
  background-color: lightgrey;
}
</style>
<template>
  <div class="home-page">
    <section class="components-list">
      <router-link to="../components/Button">Button</router-link>
      <router-link to="../components/Alerts">Alerts</router-link>
      <router-link to="../components/Input">Input</router-link>
    </section>
    <section class="game-button-container">
      <pre>
        <code>
         1234
        </code>
      </pre>
    </section>
  </div>
</template>
