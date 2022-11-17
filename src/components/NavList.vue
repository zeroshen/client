<script setup lang="ts"></script>
<style scoped>
.components-list {
  width: 20%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 50px;
}
</style>
<template>
  <section class="components-list">
    <ul>
      <li><router-link to="../components/Text">Text</router-link></li>
      <li><router-link to="../components/Button">Button</router-link></li>
      <li><router-link to="../components/Alert">Alert</router-link></li>
      <li><router-link to="../components/Input">Input</router-link></li>
      <li><router-link to="../components/Link">Link</router-link></li>
      <li><router-link to="../components/Spinner">Spinner</router-link></li>
      <li><router-link to="../components/Tab">Tab</router-link></li>
      <li><router-link to="../components/Badge">Badge</router-link></li>
      <li><router-link to="../components/PopOver">PopOver</router-link></li>
      <li><router-link to="../components/Image">Images</router-link></li>
      <li><router-link to="../components/Card">Card</router-link></li>
      <li>
        <router-link to="../components/AspectRatio">Aspect Ratio</router-link>
      </li>
      <li><router-link to="../components/Grid">Grid</router-link></li>
      <li><router-link to="../components/Audio">Audio</router-link></li>
      <li><router-link to="../components/Video">Video</router-link></li>
      <li><router-link to="../components/Nav">Navigation List</router-link></li>
    </ul>
  </section>
</template>
