<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from "vue";
import NavList from "@/components/NavList.vue";

export default defineComponent({
  components: { NavList },
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
  padding-top: 30px;
}
</style>
<template>
  <div class="page">
    <NavList></NavList>
    <section class="code-container">
      <h1>Alert</h1>
      <section class="components">
        <div class="alert">
          <strong>Success!</strong> You could add some transitions later.
        </div>
      </section>
      <pre>
        <code>
         {{str}}
        </code>
      </pre>
    </section>
  </div>
</template>
