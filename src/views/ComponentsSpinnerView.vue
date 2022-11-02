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
      "lds-ring {\n" +
      "  display: inline-block;\n" +
      "  position: relative;\n" +
      "  width: 80px;\n" +
      "  height: 80px;\n" +
      "}\n" +
      ".lds-ring div {\n" +
      "  box-sizing: border-box;\n" +
      "  display: block;\n" +
      "  position: absolute;\n" +
      "  width: 64px;\n" +
      "  height: 64px;\n" +
      "  margin: 8px;\n" +
      "  border: 8px solid lightgreen;\n" +
      "  border-radius: 50%;\n" +
      "  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n" +
      "  border-color: lightgreen transparent transparent transparent;\n" +
      "}\n" +
      ".lds-ring div:nth-child(1) {\n" +
      "  animation-delay: -0.45s;\n" +
      "}\n" +
      ".lds-ring div:nth-child(2) {\n" +
      "  animation-delay: -0.3s;\n" +
      "}\n" +
      ".lds-ring div:nth-child(3) {\n" +
      "  animation-delay: -0.15s;\n" +
      "}\n" +
      "@keyframes lds-ring {\n" +
      "  0% {\n" +
      "    transform: rotate(0deg);\n" +
      "  }\n" +
      "  100% {\n" +
      "    transform: rotate(360deg);\n" +
      "  }\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="lds-ring">\n' +
      "    <div></div>\n" +
      "    <div></div>\n" +
      "    <div></div>\n" +
      "    <div></div>\n" +
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
lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid lightgreen;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: lightgreen transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.components {
  padding-top: 20px;
}
</style>
<template>
  <div class="page">
    <NavList></NavList>
    <section class="code-container">
      <h1>Spinner</h1>
      <section class="components">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <br />
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
