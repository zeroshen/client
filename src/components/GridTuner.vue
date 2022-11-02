<script setup lang="ts">
import SampleCard from "@/components/SampleCard.vue";
import NavLink from "@/components/NavList.vue";
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const str =
      "\nCSS Part:\n" +
      ".grid-container {\n" +
      "  display: grid;\n" +
      "  grid-template-columns: 1fr 1fr 1fr;\n" +
      "  padding: 2em 1.5em;\n" +
      "  gap: 25px;\n" +
      "  min-width: 75%;\n" +
      "  max-width: 100%;\n" +
      "}" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="grid-container">\n' +
      '  <SampleCard class="grid-item"></SampleCard>\n' +
      '  <SampleCard class="grid-item"></SampleCard>\n' +
      '  <SampleCard class="grid-item"></SampleCard>\n' +
      '  <SampleCard class="grid-item"></SampleCard>\n' +
      '  <SampleCard class="grid-item"></SampleCard>\n' +
      '  <SampleCard class="grid-item"></SampleCard>\n' +
      "</div>";
    return {
      str,
    };
  },
});
</script>
<style>
.page {
  display: flex;
  width: 100%;
  flex-direction: row;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2em 1.5em;
  gap: 25px;
  min-width: 75%;
  max-width: 100%;
}
.code-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightgrey;
}
</style>
<template>
  <section class="page">
    <NavLink></NavLink>
    <div class="sample-codes">
      <h1>Grid</h1>
      <div class="grid-container">
        <SampleCard class="grid-item"></SampleCard>
        <SampleCard class="grid-item"></SampleCard>
        <SampleCard class="grid-item"></SampleCard>
        <SampleCard class="grid-item"></SampleCard>
        <SampleCard class="grid-item"></SampleCard>
        <SampleCard class="grid-item"></SampleCard>
      </div>
      <section class="code-container">
        <pre>
        <code>
         {{str}}
        </code>
        </pre>
      </section>
    </div>
  </section>
</template>
