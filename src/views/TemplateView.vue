<script setup lang="ts">
// TODO: Try to print something;
console.log();
</script>

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

.template-card {
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
.textarea {
  resize: none;
  overflow: hidden;
  width: 100%;
  min-height: 100px;
}
lable {
  font-weight: bold;
}
</style>
<template>
  <!--  TODO: Add navigation bar here-->
  <div class="template-nav">Add navigation bar here</div>
  <div class="home-page">
    <section class="template-card">
      <!--  TODO: Add card here-->
      <div>Add card here</div>
    </section>
    <section class="template-button-container">
      <!--  TODO: Add button/link here-->
      <div>Add button/link here</div>
    </section>
  </div>
  <div class="template-footer">
    Add several components here(with modified colors/fonts/styles)
  </div>
  <!--  TODO: Modify input here, including: height, width,
    position... -->
  <lable for="subject"
    >Leave comments here：(Modify here, including: height, width,
    position...)</lable
  >
  <input
    type="text"
    id="subject"
    class="textarea"
    placeholder="comments..."
    required
  />
</template>
