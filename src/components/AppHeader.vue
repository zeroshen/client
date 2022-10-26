<script setup lang="ts"></script>

<style scoped>
header {
  background-image: linear-gradient(to left, #55af94, #a1c754);
  display: flex;
  flex-direction: row;
  padding: 1em;
  gap: 1em;
  min-height: 92px;
}

@media (max-width: 600px) {
  header {
    flex-direction: column;
  }
}
</style>

<template>
  <header class="container">
    <div>Hello</div>
  </header>
</template>
