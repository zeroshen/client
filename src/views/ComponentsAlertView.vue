<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const str =
      " \n" +
      "CSS Part:\n" +
      ".alert {\n" +
      "  padding: 1em;\n" +
      "  padding-right: 2em;\n" +
      "  margin-bottom: 1em;\n" +
      "  background: lightgreen;\n" +
      "  border: 2px solid;\n" +
      "  position: relative;\n" +
      "  border-radius: 5px;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="alert">\n' +
      "     <strong>Success!</strong> You could add some transitions later.\n" +
      "</div>";
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
.alert {
  padding: 1em;
  padding-right: 2em;
  margin-bottom: 1em;
  background: lightgreen;
  border: 2px solid;
  position: relative;
  border-radius: 5px;
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
        <div class="alert">
          <strong>Success!</strong> You could add some transitions later.
        </div>
      </section>
    </section>
  </div>
</template>
