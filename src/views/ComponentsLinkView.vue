<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const str =
      " \n" +
      "CSS Part:\n" +
      ".link {\n" +
      "  padding: 10px 20px;\n" +
      "  font-size: 27px;\n" +
      "  font-family: arail;\n" +
      "  cursor: pointer;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<router-link class="link" to="#">Example</router-link>';
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
.link {
  padding: 10px 20px;
  font-size: 27px;
  font-family: arail;
  cursor: pointer;
}
.components {
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
</style>
<template>
  <div class="page">
    <section class="components-list">
      <li><router-link to="../components/Button">Button</router-link></li>
      <li><router-link to="../components/Alert">Alert</router-link></li>
      <li><router-link to="../components/Input">Input</router-link></li>
      <li><router-link to="../components/Image">Images</router-link></li>
    </section>
    <section class="code-container">
      <h1>Link</h1>
      <pre>
        <code>
         {{str}}
        </code>
      </pre>
      <section class="components">
        <router-link class="link" to="#">Example</router-link>
      </section>
    </section>
  </div>
</template>
