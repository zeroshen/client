<script setup lang="ts"></script>

<style scoped>
.page {
  display: flex;
}
.components-list {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
}
.code-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
}
code {
  padding: 10px;
  display: block;
  white-space: pre;
  background-color: lightgrey;
}
</style>
<template>
  <div class="page">
    <section class="components-list">
      <li><router-link to="../components/Button">Button</router-link></li>
      <li><router-link to="../components/Alerts">Alerts</router-link></li>
      <li><router-link to="../components/Inputs">Inputs</router-link></li>
      <li><router-link to="../components/Image">Images</router-link></li>
    </section>
    <section class="code-container">
      <pre>
        <code>
         1234
        </code>
      </pre>
    </section>
  </div>
</template>
