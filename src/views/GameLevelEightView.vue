<script setup lang="ts">
import { useGameStore } from "@/store/game";
const gameStore = useGameStore();
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const current = 0;
    const codes =
      "              <div>Hello tag div</div>\n" +
      "              <div class='hello1'>Hello 1 class</div>\n" +
      "              <div class='hello1'>Hello 1 class 2</div>\n" +
      "              <div id='hello3'>Hello 3 tag</div>\n" +
      "              <div>Hello tag div 2</div>";
    const style_samples =
      "              div {\n" +
      "                color: red;\n" +
      "              }\n" +
      "              .hello1 {\n" +
      "                color: blue;\n" +
      "              }\n" +
      "              #hello2 {\n" +
      "                color: green;\n" +
      "              }\n";
    const card_sample_code =
      "\nCSS Part:\n" +
      ".card-sample {\n" +
      "  border-radius: 4px;\n" +
      "  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n" +
      "  color: black;\n" +
      "  margin: 8px;\n" +
      "  min-width: 290px;\n" +
      "  max-width: 400px;\n" +
      "  height: auto;\n" +
      "  overflow: hidden;" +
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
    return { current, codes, style_samples, card_sample_code };
  },
  computed: {},
  methods: {},
});
</script>

<style scoped>
.game-view {
  flex: 1;
  min-height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
}

.game-level {
  display: flex;
  flex-direction: column;
  width: 85%;
  padding: 2rem 1rem;
}

.game-title {
  color: var(--vue-color-primary);
}

.game-quiz {
  min-width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2rem;
}
.game-texts {
  padding-top: 2rem;
}
.inline-example {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left: 10rem;
}

.inline-example div {
  color: red;
}

.inline-example .hello1 {
  color: blue;
}

.inline-example #hello3 {
  color: green;
}

.game-texts a {
  color: var(--vue-color-secondary-dark);
  font-weight: bold;
}

.group-words {
  padding: 40px 80px;
}

.game-text {
  font-family: "Times New Roman";
  font-style: italic;
  color: darkgray;
}

.quiz-button {
  background-color: #00939c;
  color: #fafafa;
  border: none;
}

.quiz-button:hover {
  background-color: #016f75;
  color: #fafafa;
  border: none;
  cursor: pointer;
}

.nav-container {
  background-color: #f7f4e8;
  width: 360px;
  border-radius: 25px;
}

.nav-headline {
  margin: 20px 16px;
  color: #484738;
  /* 56px- */
}

.nav-container li {
  line-height: 56px;
  margin: 0 28px;
}

.nav-container .nav-active-indicator,
li:hover {
  padding: 0 16px;
  margin: 0 12px;
  border-radius: 25px 25px;
  background-color: #e6e4c4;
  cursor: pointer;
}
.nav-line-content {
  display: flex;
  justify-content: space-between;
}

.nav-upper li:last-child .nav-line-content {
  border-bottom: 1px #787669 solid;
  width: 100%;
}

i {
  width: 18px;
  height: 18px;
  text-align: center;
  margin-right: 12px;
  vertical-align: middle;
}

.nav-lower i {
  font-size: 12px;
  text-align: center;
}
</style>

<template>
  <section class="game-view">
    <div class="game-level">
      <div class="game-level-intro">
        <h1 class="game-title">Stage 8 - Wrapping up... just for now</h1>
        <div>
          Congrats to our
          <span class="text-color-vue-intermediate">Vue Apprentice</span> on
          acquiring the finishing all the stages of our tutorial. It is really
          nice to have you as a part of our journey of learning how to build a
          web page. Now we have these following tasks for you to finally finish
          up your own website.
        </div>
      </div>
      <div class="game-texts">
        <div class="group-words game-text">
          <h1>Tasks: Finish up your website</h1>
          Try to build your own page from scratch
          <br />
          <br />
          <h3>Make your own page</h3>
          As you can see on the header in the code template we provided, there
          are links for three pages in our (I mean your!!) website. However, you
          may also notice that we only have templates for two pages. Well this
          is because we want to you to make your own third page with your own
          creativity. And as there's absolutely no right or wrong answer in this
          tutorial, it would also be fine for you to just delete the third page.
          <br />
          <br />
          <h3>Make links working</h3>
          While we have texts for links, to make the website actually working,
          an actually working link list must be implemented. To achieve that,
          try to look at examples for vue routers.
          <a href="https://router.vuejs.org/"> Link to documentation </a>.
          Besides, just keep in mind that you may want to also keep your headers
          outside of the contents changed by routers, so it don't rerender
          unnecessarily.
        </div>
      </div>

      <div class="game-quiz game-quiz-ready">
        <router-link to="../game">
          <button @click="gameStore.add(1008)" class="quiz-button">
            Finish
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>
