<script setup lang="ts">
import NavLink from "@/components/NavList.vue";
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const str = "heelo";
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
</style>
<template>
  <section>
    <div class="page">
      <NavLink></NavLink>
      <div class="content-wrapper">
        <section class="components">
          <div class="text-container">
            <div class="text-normal">Hello</div>
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
