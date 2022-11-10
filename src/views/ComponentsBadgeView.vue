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
      ".badge .fa-stack[data-count]:after {\n" +
      "  position: absolute;\n" +
      "  right: 0%;\n" +
      "  top: 1%;\n" +
      "  content: attr(data-count);\n" +
      "  font-size: 30%;\n" +
      "  padding: 0.6em;\n" +
      "  border-radius: 999px;\n" +
      "  line-height: 0.75em;\n" +
      "  color: white;\n" +
      "  background: rgba(255, 0, 0, 0.85);\n" +
      "  text-align: center;\n" +
      "  min-width: 2em;\n" +
      "  font-weight: bold;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="badge">\n' +
      '   <span class="fa-stack fa-5x has-badge" data-count="2">\n' +
      '       <i class="fa fa-circle fa-stack-2x"></i>\n' +
      '       <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>\n' +
      "   </span>\n" +
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

.badge .fa-stack[data-count]:after {
  position: absolute;
  right: 0%;
  top: 1%;
  content: attr(data-count);
  font-size: 30%;
  padding: 0.6em;
  border-radius: 999px;
  line-height: 0.75em;
  color: white;
  background: rgba(255, 0, 0, 0.85);
  text-align: center;
  min-width: 2em;
  font-weight: bold;
}
.components {
  padding-top: 20px;
}
</style>
<template>
  <div class="page">
    <NavList></NavList>
    <section class="code-container">
      <h1>Badge</h1>
      <section class="components">
        <div class="badge">
          <span class="fa-stack fa-5x has-badge" data-count="2">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
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
