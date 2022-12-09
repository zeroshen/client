<script setup lang="ts">
const brackets = "{{}}";
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const current = 0;
    const value = 0;
    const truth = false;
    const colorToggle = false;
    const code_one =
      '<div class="game-text-value">Value: {{ this.value }}</div>';
    const code_two =
      '<div class="game-text-value">Truth: {{ truth ? "YES" : "NO" }}</div>';
    const code_three =
      '<div class="game-text-value" :class="{ \'text-color-vue-dark\': colorToggle }">What\'s up</div>';
    const raw = "<div>RAW</div>";
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
    return {
      current,
      value,
      truth,
      colorToggle,
      raw,
      codes,
      code_one,
      code_two,
      code_three,
      style_samples,
      card_sample_code,
    };
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

.code-sample {
  color: #004d51;
}
</style>

<template>
  <section class="game-view">
    <div class="game-level">
      <div class="game-level-intro">
        <h1 class="game-title">Stage 5 - Vue components with binding</h1>
        <div>
          Vue.js has a strong functionality to allow you bind your html contents
          with javascript variables. It can be used for both styles and classes
          to make your website more versatile. Among all templates, there are
          five main usage of bindings which are text interpolation, Raw
          HTML,attribute bindings, javascript expressions, and directives.
        </div>
      </div>
      <div class="game-texts">
        <h3 class="game-text-title">Basic syntax</h3>
        <div>
          So for text interpolation and raw html, the mechanism is pretty
          simple. You just store the string or raw html as string in a variable,
          and render it by wrapping it with a mustache {{ brackets }}. And
          whenever the variable brackets got updated, the rendering/look of the
          will be changed accordingly as well.
        </div>
        <div class="game-text-change-value">
          <input
            type="range"
            min="0"
            max="50"
            class="tuner-slider"
            name="width"
            v-model="value"
          />
        </div>
        <div class="game-text-value">Value: {{ this.value }}</div>
        <div>
          The code would be
          <span class="code-sample">{{ this.code_one }}</span> While this.value
          is initialized as a class data. And not to mention that
          <span class="text-color-vue-dark">this line of code</span> is actually
          written using a raw html string.
        </div>
      </div>
      <div class="game-texts">
        <h3 class="game-text-title">Javascript Expressions</h3>
        <div>
          Of course it might seem the same for you that the javascript
          expressions and raw html statement might work similar. But they are
          not. Well, when you put a javascript expression inside a
          <span class="text-color-vue-dark">mustache</span>, what you are
          getting is actually the result of the expression.
        </div>
        <div>
          <label for="switch" class="toggle">truth?: </label>
          <input type="checkbox" id="switch" class="checkbox" v-model="truth" />
        </div>
        <div class="game-text-value">truth: {{ truth ? "YES" : "NO" }}</div>
        <div>
          The code would be <span class="code-sample">{{ this.code_two }}</span
          >. And as you can see the when you toggle the value of truth to false
          or true, the rendered text will be changed accordingly! Plus once more
          this code is also rendered by the variable for raw html!
        </div>
      </div>
      <div class="game-texts">
        <h3 class="game-text-title">Attribute Bindings</h3>
        <div>
          Well as you might have learned from the past few stages of html/css,
          attributes are the 'options' that we have in an html tag. And the one
          that we use the most to manage styles.
        </div>
        <div>
          <label for="switch-bg" class="toggle">class?: </label>
          <input
            type="checkbox"
            id="switch-bg"
            class="checkbox"
            v-model="colorToggle"
          />
        </div>
        <div
          class="game-text-value"
          :class="{ 'text-color-vue-dark': colorToggle }"
        >
          What's up
        </div>
        <div>
          The code would be
          <span class="code-sample">{{ this.code_three }}</span
          >. To be clear, the class 'text-color-vue-dark' only have one property
          which is a <span class="text-color-vue-dark">green-ish</span> color.
          And this <code>span</code> will have the class attribute whenever
          colorToggle is set to truth, which is the checkbox above does. And
          notice here the :class is actually a shorthand for v-bind:class, which
          is a directive argument!
        </div>
      </div>
      <div class="game-texts">
        <h3 class="game-text-title">Directives</h3>
        <div>
          As in the last example, v-bind is an example of directive arguments.
          And according to the official website, any attributes starting with a
          <span class="text-color-vue-dark">'v-'</span> is most likely a
          directive argument. Definitely see here for the:
          <a href="https://vuejs.org/api/built-in-directives.html">
            Full list of Vue directives
          </a>
        </div>
      </div>

      <div class="game-quiz game-quiz-ready">
        <router-link to="../game/5/quiz">
          <button class="quiz-button">Go to Quiz</button>
        </router-link>
      </div>
    </div>
  </section>
</template>
