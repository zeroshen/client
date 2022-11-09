<script setup></script>

<style>
.page-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <section class="page-view">
    <div>Descriptions for Vue</div>
    <div>
      Mary wants to implement a website. Try to fill TODO in the template.
    </div>
    <router-link to="../game/1/quiz">
      <button>Go to Quiz</button>
    </router-link>
  </section>
</template>
