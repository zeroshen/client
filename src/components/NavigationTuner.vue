<script setup lang="ts">
import NavLink from "@/components/NavList.vue";
</script>

<style scoped>
.page {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex: 1;
  min-height: 100%;
}

.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: initial;
  padding: 50px;
}

.code-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightgrey;
}

code {
  padding: 0 12px;
  display: block;
  white-space: pre;
  background-color: lightgrey;
}

.components {
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  justify-content: center;
  align-items: initial;
  width: 100%;
}
</style>

<template>
  <div class="page">
    <nav-link></nav-link>
    <div class="content-wrapper">
      <h1>Navigation List</h1>
      <section class="components">
        <div class="nav-container">Hello</div>
      </section>
      <section class="code-container">
        <div>Hello</div>
      </section>
    </div>
  </div>
</template>
