<script setup lang="ts"></script>

<style scoped>
.template-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home-page {
  display: flex;
  height: 300px;
}

.template-link {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.template-button-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.template-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
}
</style>
<template>
  <div class="template-nav">Add navigation bar here</div>
  <div class="home-page">
    <section class="template-link">
      <div>Add link here</div>
    </section>
    <section class="template-button-container">
      <div>Add button here</div>
    </section>
  </div>
  <div class="template-footer">
    Add several components here(with modified colors/fonts/styles)
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
