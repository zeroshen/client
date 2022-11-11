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
  width: 100%;
  flex-direction: row;
  flex: 1;
  min-height: 100%;
}

.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: initial;
  padding: 50px;
}

.code-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightgrey;
}

code {
  padding: 0 12px;
  display: block;
  white-space: pre;
  background-color: lightgrey;
}

.components {
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  justify-content: center;
  align-items: initial;
  width: 100%;
}
.link {
  padding: 10px 20px;
  font-size: 27px;
  font-family: arail;
  cursor: pointer;
}
</style>
<template>
  <div class="page">
    <NavList></NavList>
    <div class="content-wrapper">
      <h1>Link</h1>
      <section class="components">
        <router-link class="link" to="#">Example</router-link>
      </section>
      <section class="code-container">
        <pre>
        <code>
         {{str}}
        </code>
      </pre>
      </section>
    </div>
  </div>
</template>
