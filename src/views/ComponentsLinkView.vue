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
  padding-top: 20px;
}
</style>
<template>
  <div class="page">
    <NavList></NavList>
    <section class="code-container">
      <h1>Link</h1>
      <section class="components">
        <router-link class="link" to="#">Example</router-link>
      </section>
      <pre>
        <code>
         {{str}}
        </code>
      </pre>
    </section>
  </div>
</template>
