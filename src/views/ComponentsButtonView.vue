<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const str =
      "  button {\n" +
      "  padding: 10px 20px;\n" +
      "  border: 1px solid #ddd;\n" +
      "  color: #333;\n" +
      "  background-color:#fff;\n" +
      "  border-radius: 4px;\n" +
      "  font-size: 14px;\n" +
      "  font-family: arail;\n" +
      "  cursor: pointer;\n" +
      "  &[disabled]{\n" +
      "    cursor: not-allowed;\n" +
      "  }\n" +
      "  &.danger {\n" +
      "    background-color: #ff4949;\n" +
      "    color: #fff;\n" +
      "  }\n" +
      "  &.success {\n" +
      "    background-color: #13ce66;\n" +
      "    color: #fff;\n" +
      "  }\n" +
      "  &.info {\n" +
      "    background-color: #50bfff;\n" +
      "    color: #fff;\n" +
      "  }\n" +
      "}";
    return {
      str,
    };
  },
});
</script>
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
         {{str}}
        </code>
      </pre>
      <button>Example</button>
    </section>
  </div>
</template>
