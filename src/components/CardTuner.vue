<script setup lang="ts">
const filename = "little-dorrit.gif";
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const str =
      " \n" +
      "CSS Part:\n" +
      ".alert {\n" +
      "  padding: 1em;\n" +
      "  padding-right: 2em;\n" +
      "  margin-bottom: 1em;\n" +
      "  background: lightgreen;\n" +
      "  border: 2px solid;\n" +
      "  position: relative;\n" +
      "  border-radius: 5px;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="alert">\n' +
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
  width: 50%;
  display: flex;
  flex-direction: row;
  padding: 50px;
  justify-content: center;
}

.components {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
}

.components .card-sample {
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  color: black;
  margin: 8px;
  min-width: 290px;
  overflow: hidden;
}

.components .image-wrapper {
  position: relative;
}

.image-wrapper-16-9 {
  height: 0px;
  overflow: hidden;
  padding-bottom: 56.25%;
}
.image-wrapper-16-9 > img {
  width: 100%;
  height: auto;
}

.card-sample .card-texts {
  padding: 1rem;
}

.components .card-title {
  font-weight: bold;
  font-size: 2rem;
}

.components .card-sub-title {
  padding-top: 12px;
  color: grey;
}

.components .card-description {
  padding-top: 12px;
  font-weight: normal;
  font-size: 1rem;
}
</style>
<template>
  <div class="page">
    <section class="code-container">
      <pre>
        <code>
         {{str}}
        </code>
      </pre>
    </section>
    <section class="components">
      <div class="card-sample">
        <div class="image-wrapper image-wrapper-16-9">
          <img
            class="card-image"
            :src="require('@/assets/images/books/' + filename)"
            alt="card-image-sample"
          />
        </div>
        <div class="card-texts">
          <div class="card-title">tortor id ipsum</div>
          <div class="card-sub-title">ipsum lorem</div>
          <div class="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
