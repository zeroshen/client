<script setup lang="ts">
import NavLink from "@/components/NavList.vue";
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const str =
      "\nCSS Part:\n" +
      ".text-with-font {\n" +
      '  font-family: "Academy Engraved LET";\n' +
      "}\n" +
      "\n" +
      ".text-with-color {\n" +
      "  color: #00939c;\n" +
      "}\n" +
      "\n" +
      ".text-with-weight {\n" +
      "  font-weight: bold;\n" +
      "}\n" +
      "\n" +
      ".text-with-decoration {\n" +
      "  text-decoration: underline #00939c;\n" +
      "}\n" +
      "\n" +
      ".text-after::after {\n" +
      '  content: " <- BORING";\n' +
      "  color: red;\n" +
      "}\n" +
      "\n" +
      ".text-before-useful {\n" +
      "  display: inline-block;\n" +
      "  position: relative;\n" +
      "}\n" +
      "\n" +
      ".text-before-useful::before {\n" +
      '  content: ".";\n' +
      "  display: inline-block;\n" +
      "  position: absolute;\n" +
      "  bottom: -0.3em;\n" +
      "  left: 0;\n" +
      "  text-align: center;\n" +
      "  font-size: 30px;\n" +
      "  width: 100%;\n" +
      "  color: #00939c;\n" +
      "}" +
      "\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="text-normal">The very normal Text</div>\n' +
      '<div class="text-with-font">The very normal Text with a font</div>\n' +
      '<div class="text-with-font text-with-color">\n' +
      "  Text with font and color\n" +
      "</div>\n" +
      "<div\n" +
      '  class="text-with-font text-with-color text-with-size text-with-weight"\n' +
      ">\n" +
      "  Text with font, color, size, weight\n" +
      "</div>\n" +
      '<div class="text-with-decoration">Text with Decoration</div>\n' +
      '<div class="text-after">Text with ::after selector</div>\n' +
      "<div>\n" +
      "  A good example of usage of ::before selector:\n" +
      '  <span class="text-before-useful">text</span>\n' +
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

.text-with-font {
  font-family: "Academy Engraved LET";
}

.text-with-color {
  color: #00939c;
}

.text-with-weight {
  font-weight: bold;
}

.text-with-decoration {
  text-decoration: underline #00939c;
}

.text-after::after {
  content: " <- BORING";
  color: red;
}

.text-before-useful {
  display: inline-block;
  position: relative;
}

.text-before-useful::before {
  content: ".";
  display: inline-block;
  position: absolute;
  bottom: -0.3em;
  left: 0;
  text-align: center;
  font-size: 30px;
  width: 100%;
  color: #00939c;
}
</style>
<template>
  <section>
    <div class="page">
      <NavLink></NavLink>
      <div class="content-wrapper">
        <h1>Text</h1>
        <section class="components">
          <div class="text-container">
            <div class="text-normal">The very normal Text</div>
            <div class="text-with-font">The very normal Text with a font</div>
            <div class="text-with-font text-with-color">
              Text with font and color
            </div>
            <div
              class="text-with-font text-with-color text-with-size text-with-weight"
            >
              Text with font, color, size, weight
            </div>
            <div class="text-with-decoration">Text with Decoration</div>
            <div class="text-after">Text with ::after selector</div>
            <div>
              A good example of usage of ::before selector:
              <span class="text-before-useful">text</span>
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
