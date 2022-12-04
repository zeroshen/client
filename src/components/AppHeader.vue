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

.text-logo {
  font-family: var(--title-font-family);
  text-decoration: none;
  color: black;
}

@media (max-width: 600px) {
  header {
    flex-direction: column;
  }
}
</style>

<template>
  <header class="container">
    <h2>
      <router-link to="/" class="text-logo">
        Interactive Web Application Tutorial
      </router-link>
    </h2>
  </header>
</template>
