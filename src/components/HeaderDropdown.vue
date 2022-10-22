<script setup lang="ts">
import { inject } from "vue";
const categoryList = inject("categoryList");
</script>

<style scoped>
.header-dropdown {
  position: relative;
}

.categories-button {
  background-color: var(--primary-color-dark);
  margin-top: 0.25em;
}

.header-dropdown ul {
  background-color: white;
  color: black;
  display: none;
}

.header-dropdown li {
  padding: 0.25em 0.5em;
}

.header-dropdown a {
  color: black;
  text-decoration: none;
}

.header-dropdown li:hover {
  background: lightgray;
}

.header-dropdown:hover ul {
  display: block;
  position: absolute;
  min-width: 8em;
  z-index: 1;
  cursor: pointer;
}
</style>

<template>
  <div class="header-dropdown">
    <button class="button categories-button">Categories</button>
    <ul>
      <li v-for="category in categoryList" :key="category.categoryId">
        <router-link :to="'../category/' + category.name">
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
