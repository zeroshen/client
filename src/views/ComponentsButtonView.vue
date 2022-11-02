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
  padding-top: 20px;
}
</style>
<template>
  <div class="page">
    <NavList></NavList>
    <section class="code-container">
      <h1>Button</h1>
      <section class="components">
        <button>Example</button>
      </section>
      <pre>
        <code>
         {{str}}
        </code>
      </pre>
    </section>
  </div>
</template>
