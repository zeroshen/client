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
      ".popover {\n" +
      "  position: relative;\n" +
      "  width: 200px;\n" +
      "  height: 100px;\n" +
      "  background-color: rgb(233, 212, 222);\n" +
      "  border-radius: 4px;\n" +
      "  top: 50px;\n" +
      "  left: 50px;\n" +
      "  box-shadow: 3px -2px 4px #aaa;\n" +
      "}\n" +
      ".popover-arrow {\n" +
      "  position: absolute;\n" +
      "  top: -18px;\n" +
      "  left: 20px;\n" +
      "  border-left: 20px solid transparent;\n" +
      "  border-right: 20px solid transparent;\n" +
      "  border-bottom: 20px solid rgb(233, 212, 222);\n" +
      "  width: 0;\n" +
      "  height: 0;\n" +
      "  -webkit-filter: drop-shadow(0 -2px 2px #aaa);\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="popover">\n' +
      '     <div class="popover-arrow"></div>\n' +
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
.popover {
  position: relative;
  width: 200px;
  height: 100px;
  background-color: rgb(233, 212, 222);
  border-radius: 4px;
  top: 50px;
  left: 50px;
  box-shadow: 3px -2px 4px #aaa;
}
.popover-arrow {
  position: absolute;
  top: -18px;
  left: 20px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid rgb(233, 212, 222);
  width: 0;
  height: 0;
  -webkit-filter: drop-shadow(0 -2px 2px #aaa);
}
.components {
  padding-top: 20px;
}
</style>
<template>
  <div class="page">
    <NavList></NavList>
    <section class="code-container">
      <h1>PopOver</h1>
      <section class="components">
        <div class="popover">
          <div class="popover-arrow"></div>
        </div>
        <br />
      </section>
      <pre>
        <code>
         {{str}}
        </code>
      </pre>
    </section>
  </div>
</template>
