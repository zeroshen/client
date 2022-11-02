<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const str =
      " \n" +
      "CSS Part:\n" +
      "button {\n" +
      "  padding: 10px 20px;\n" +
      "  border: 1px solid #ddd;\n" +
      "  color: #333;\n" +
      "  background-color:#fff;\n" +
      "  border-radius: 4px;\n" +
      "  font-size: 14px;\n" +
      "  font-family: arail;\n" +
      "  cursor: pointer;\n" +
      "  width: 100px;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      "<button>Example</button>";
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
button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-family: arail;
  width: 100px;
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
      <section class="components">
        <button>Example</button>
      </section>
    </section>
  </div>
</template>
