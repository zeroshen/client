<script setup lang="ts">
const filename = "little-dorrit.gif";
</script>
<style>
.card-sample {
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: black;
  margin: 8px;
  min-width: 290px;
  max-width: 400px;
  height: auto;
  overflow: hidden;
}

.card-sample .image-wrapper {
  position: relative;
}

.image-wrapper-16-9 {
  height: 0px;
  overflow: hidden;
  padding-bottom: 56.25%;
}
.image-wrapper-16-9 > img {
  width: 100%;
  height: auto;
}

.card-sample .card-texts {
  padding: 1rem;
}

.card-sample .card-title {
  font-weight: bold;
  font-size: 2rem;
}

.card-sample .card-sub-title {
  padding-top: 12px;
  color: grey;
}

.card-sample .card-description {
  padding-top: 12px;
  font-weight: normal;
  font-size: 1rem;
}
</style>
<template>
  <div class="card-sample">
    <div class="image-wrapper image-wrapper-16-9">
      <img
        class="card-image"
        :src="require('@/assets/images/books/' + filename)"
        alt="card-image-sample"
      />
    </div>
    <div class="card-texts">
      <div class="card-title">tortor id ipsum</div>
      <div class="card-sub-title">ipsum lorem</div>
      <div class="card-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  </div>
</template>
