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
      "textarea {\n" +
      "  resize: none;\n" +
      "  overflow: hidden;\n" +
      "  width: 100%;\n" +
      "  min-height: 50px;\n" +
      "}\n" +
      "lable {\n" +
      "  font-weight: bold;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<lable for="subject">Content：</lable>\n' +
      "<input\n" +
      '   type="text"\n' +
      '   id="subject"\n' +
      '   class="form-control"\n' +
      '   placeholder="Content..."\n' +
      "   required\n" +
      "/>";
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
textarea {
  resize: none;
  overflow: hidden;
  width: 100%;
  min-height: 50px;
}
lable {
  font-weight: bold;
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
      <h1>Input</h1>
      <section class="components">
        <lable for="subject">Content：</lable>
        <input
          type="text"
          id="subject"
          class="form-control"
          placeholder="Content..."
          required
        />
      </section>
      <pre>
        <code>
         {{str}}
        </code>
      </pre>
    </section>
  </div>
</template>
