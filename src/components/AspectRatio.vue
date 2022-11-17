<script setup lang="ts">
import NavLink from "@/components/NavList.vue";
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const str =
      "\nCSS Part:\n" +
      ".ar-wrapper {\n" +
      "  display: flex;\n" +
      "  flex-direction: row;\n" +
      "  height: auto;\n" +
      "  align-items: flex-start;\n" +
      "  gap: 1rem;\n" +
      "}\n" +
      "\n" +
      ".ar-wrapper div {\n" +
      "  display: flex;\n" +
      "  justify-content: center;\n" +
      "  align-items: center;\n" +
      "  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n" +
      "}\n" +
      "\n" +
      ".ar-16-9 {\n" +
      "  aspect-ratio: 16/9;\n" +
      "}\n" +
      "\n" +
      ".ar-4-3 {\n" +
      "  aspect-ratio: 4/3;\n" +
      "}\n" +
      "\n" +
      ".ar-auto {\n" +
      "  aspect-ratio: auto;\n" +
      "}\n" +
      "\n" +
      ".large {\n" +
      "  width: 300px;\n" +
      "}\n" +
      "\n" +
      ".small {\n" +
      "  width: 150px;\n" +
      "}" +
      "\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="ar-wrapper">\n' +
      '  <div class="ar-16-9 large">16/9 Large</div>\n' +
      '  <div class="ar-16-9 small">16/9 Small</div>\n' +
      "</div>\n" +
      '<div class="ar-wrapper">\n' +
      '  <div class="ar-4-3 large">4/3 Large</div>\n' +
      '  <div class="ar-4-3 small">4/3 Small</div>\n' +
      "</div>\n" +
      '<div class="ar-wrapper">\n' +
      '  <div class="ar-auto large">Auto Large</div>\n' +
      '  <div class="ar-auto small">Auto Small</div>\n' +
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
.ar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.ar-wrapper {
  display: flex;
  flex-direction: row;
  height: auto;
  align-items: flex-start;
  gap: 1rem;
}

.ar-wrapper div {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.ar-16-9 {
  aspect-ratio: 16/9;
}

.ar-4-3 {
  aspect-ratio: 4/3;
}

.ar-auto {
  aspect-ratio: auto;
}

.large {
  width: 300px;
}

.small {
  width: 150px;
}
</style>
<template>
  <section>
    <div class="page">
      <NavLink></NavLink>
      <div class="content-wrapper">
        <h1>Aspect Ratio</h1>
        <section class="components">
          <div class="ar-container">
            <div class="ar-wrapper">
              <div class="ar-16-9 large">16/9 Large</div>
              <div class="ar-16-9 small">16/9 Small</div>
            </div>
            <div class="ar-wrapper">
              <div class="ar-4-3 large">4/3 Large</div>
              <div class="ar-4-3 small">4/3 Small</div>
            </div>
            <div class="ar-wrapper">
              <div class="ar-auto large">Auto Large</div>
              <div class="ar-auto small">Auto Small</div>
            </div>
          </div>
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
  </section>
</template>
