<script setup lang="ts">
const filename = "little-dorrit.gif";
import NavList from "@/components/NavList.vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const str =
      "\nCSS Part:\n" +
      ".card-sample {\n" +
      "  border-radius: 4px;\n" +
      "  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),\n" +
      "    0 6px 20px 0 rgba(0, 0, 0, 0.19);\n" +
      "  color: black;\n" +
      "  margin: 8px;\n" +
      "  min-width: 290px;\n" +
      "  max-width: 400px;\n" +
      "  overflow: hidden;\n" +
      "}\n" +
      ".card-sample .image-wrapper {\n" +
      "  position: relative;\n" +
      "}\n" +
      ".image-wrapper-16-9 {\n" +
      "  height: 0px;\n" +
      "  overflow: hidden;\n" +
      "  padding-bottom: 56.25%;\n" +
      "}\n" +
      ".image-wrapper-16-9 > img {\n" +
      "  width: 100%;\n" +
      "  height: auto;\n" +
      "}\n" +
      ".card-sample .card-texts {\n" +
      "  padding: 1rem;\n" +
      "}\n" +
      "\n" +
      ".card-sample .card-title {\n" +
      "  font-weight: bold;\n" +
      "  font-size: 2rem;\n" +
      "}\n" +
      "\n" +
      ".card-sample .card-sub-title {\n" +
      "  padding-top: 12px;\n" +
      "  color: grey;\n" +
      "}\n" +
      ".card-sample .card-description {\n" +
      "  padding-top: 12px;\n" +
      "  font-weight: normal;\n" +
      "  font-size: 1rem;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="card-sample">\n' +
      '  <div class="image-wrapper image-wrapper-16-9">\n' +
      "    <img\n" +
      '      class="card-image"\n' +
      "      :src=\"require('@/assets/images/books/' + filename)\"\n" +
      '      alt="card-image-sample"\n' +
      "    />\n" +
      "  </div>\n" +
      '    <div class="card-texts">\n' +
      '      <div class="card-title">tortor id ipsum</div>\n' +
      '         <div class="card-sub-title">ipsum lorem</div>\n' +
      '         <div class="card-description">\n' +
      "           Lorem ipsum dolor sit amet, \n" +
      "           consectetur adipiscing elit.\n" +
      "         </div>\n" +
      "    </div>\n" +
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

.components {
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 0px;
  justify-content: center;
  align-items: initial;
  width: 100%;
}

.card-sample {
  border-radius: 4px;
  border-color: #333333;
  border-width: 0.5px;
  color: black;
  margin: 8px;
  min-width: 290px;
  max-width: 400px;
  overflow: hidden;
}

.components > .card-sample {
  margin-left: 0px;
}

.card-sample .image-wrapper {
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

.card-sample .card-title {
  font-weight: bold;
  font-size: 2rem;
}

.card-sample .card-sub-title {
  padding-top: 12px;
  color: grey;
}

.card-sample .card-description {
  padding-top: 12px;
  font-weight: normal;
  font-size: 1rem;
}
</style>
<template>
  <div class="page">
    <NavList></NavList>
    <div class="content-wrapper">
      <h1>Card</h1>
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
      <section class="code-container">
        <pre>
        <code>
         {{str}}
        </code>
        </pre>
      </section>
    </div>
  </div>
</template>
