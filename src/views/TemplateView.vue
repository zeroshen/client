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
  height: 50px;
}

.template-nav .nav-right {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
}
.home-page {
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  width: 100%;
}

.page-photo {
  width: 400px;
  aspect-ratio: 3/4;
  background-color: #271c36;
  color: #fafafa;
}

.home-page-menifesto {
  max-width: 50%;
}

lable {
  font-weight: bold;
}
</style>
<template>
  <section class="page-content">
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
      <div class="home-page-photo">
        <!--  TODO: Add card here-->
        <div class="page-photo">PLACEHOLDER FOR YOUR PHOTO</div>
      </div>
      <div class="home-page-menifesto">
        <!--  TODO: Add button/link here-->
        <div class="page-menifesto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  </section>
</template>
