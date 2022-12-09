<script setup lang="ts">
// TODO: Try to print something;
console.log();
</script>

<style scoped>
.page-content {
  padding: 0 20px;
  flex: 1;
  height: 100%;
}

.template-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 75px;
}

.template-nav .nav-right {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
}
.home-page {
  padding: 12px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  width: 100%;
}

.photo-walls-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}

.photo-walls-item {
  min-width: 300px;
  height: 300px;
  background-color: #3d2c54;
  color: #fafafa;
}

lable {
  font-weight: bold;
}
</style>
<template>
  <div class="page-content">
    <!--  TODO: Add navigation bar here-->
    <div class="template-nav">
      <div class="nav-left">Add navigation bar here</div>
      <div class="nav-right">
        <div class="nav-link">Page 1</div>
        <div class="nav-link">Page 2</div>
        <div class="nav-link">Page 3</div>
      </div>
    </div>
    <div class="home-page">
      <div class="photo-walls-container">
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
        <div class="photo-walls-item">PLACEHOLDER FOR YOUR OWN THINGS</div>
      </div>
    </div>
  </div>
</template>
