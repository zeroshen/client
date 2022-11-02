<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const str =
      " \n" +
      "CSS Part:\n" +
      "textarea {\n" +
      "  resize: none;\n" +
      "  overflow: hidden;\n" +
      "  width: 100%;\n" +
      "  min-height: 50px;\n" +
      "}\n" +
      "lable {\n" +
      "  font-weight: bold;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<lable for="subject">Content：</lable>\n' +
      "<input\n" +
      '   type="text"\n' +
      '   id="subject"\n' +
      '   class="form-control"\n' +
      '   placeholder="Content..."\n' +
      "   required\n" +
      "/>";
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
textarea {
  resize: none;
  overflow: hidden;
  width: 100%;
  min-height: 50px;
}
lable {
  font-weight: bold;
}
.components {
  width: 80%;
  display: flex;
  flex-direction: row;
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
      <li><router-link to="../components/Inputs">Inputs</router-link></li>
      <li><router-link to="../components/Image">Images</router-link></li>
    </section>
    <section class="code-container">
      <h1>Input</h1>
      <pre>
        <code>
         {{str}}
        </code>
      </pre>
      <section class="components">
        <lable for="subject">Content：</lable>
        <input
          type="text"
          id="subject"
          class="form-control"
          placeholder="Content..."
          required
        />
      </section>
    </section>
  </div>
</template>
