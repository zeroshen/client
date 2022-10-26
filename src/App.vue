<script setup lang="ts">
import { provide } from "vue";
import { CategoryItem } from "@/types";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
const categoryList: CategoryItem[] = [
  { categoryId: 1001, name: "Classics" },
  { categoryId: 1002, name: "Fantasy" },
  { categoryId: 1003, name: "Mystery" },
  { categoryId: 1004, name: "Romance" },
];
provide("categoryList", categoryList);
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>

<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
