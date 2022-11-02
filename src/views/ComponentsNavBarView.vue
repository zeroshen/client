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
      "bnav {\n" +
      "  width: 100%;\n" +
      "  color: #bbb;\n" +
      "  background: #2e2e2e;\n" +
      "  font-weight: bold;\n" +
      "  letter-spacing: 0.025em;\n" +
      "}\n" +
      "nav ul {\n" +
      "  text-align: center;\n" +
      "  margin: 0;\n" +
      "}\n" +
      "nav ul li {\n" +
      "  display: inline-block;\n" +
      "  padding: 0 3em;\n" +
      "  line-height: 3em;\n" +
      "}\n" +
      "nav ul li:hover {\n" +
      "  background: #00939c;\n" +
      "  cursor: pointer;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<nav id="navbar">\n' +
      "    <ul>\n" +
      "       <li>One</li>\n" +
      "       <li>Two</li>\n" +
      "       <li>Three</li>\n" +
      "    </ul>\n" +
      "</nav>";
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
nav {
  width: 100%;
  color: #bbb;
  background: #2e2e2e;
  font-weight: bold;
  letter-spacing: 0.025em;
}
nav ul {
  text-align: center;
  margin: 0;
}
nav ul li {
  display: inline-block;
  padding: 0 3em;
  line-height: 3em;
}
nav ul li:hover {
  background: #00939c;
  cursor: pointer;
}
.components {
  padding-top: 20px;
}
</style>
<template>
  <div class="page">
    <section class="components-list">
      <NavList></NavList>
    </section>
    <section class="code-container">
      <h1>NavBar</h1>
      <section class="components">
        <nav id="navbar">
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </nav>
      </section>
      <pre>
        <code>
         {{str}}
        </code>
      </pre>
    </section>
  </div>
</template>
