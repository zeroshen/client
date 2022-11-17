<script setup lang="ts">
import SampleCard from "@/components/SampleCard.vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { QuizItem } from "@/types";
import { QuizOption } from "@/types";

export default defineComponent({
  data() {
    const questions: QuizItem[] = [
      {
        question: "Ready?",
        answer: 0,
        options: [
          { content: "Yep!", optionId: 0, quizId: 0 },
          { content: "Nah..", optionId: 1, quizId: 0 },
        ] as QuizOption[],
        selected: -1,
        descriptions: "",
      },
      {
        question: "What does CSS stand for?",
        answer: 1,
        options: [
          { content: "Cascading Size Sheets", optionId: 0, quizId: 1 },
          { content: "Cascading Style Sheets", optionId: 1, quizId: 1 },
          { content: "Cascaded Style Sheets", optionId: 2, quizId: 1 },
          { content: "Carrot Smelly Smelly", optionId: 3, quizId: 1 },
        ] as QuizOption[],
        selected: -1,
        descriptions: "",
      },
    ];
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
    return { questions, current, codes, style_samples, card_sample_code };
  },
  computed: {},
  methods: {
    getQuestion(ind: number) {
      return this.questions[ind];
    },
    answered(optionInd: number, questionInd: number) {
      this.questions[questionInd].selected = optionInd;
      if (this.questions[questionInd].answer == optionInd) {
        console.log("hi");
      }
    },
    next() {
      if (this.current < this.questions.length - 1) {
        this.current += 1;
      }
    },
    finish() {
      console.log("finished");
    },
  },
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
</style>

<template>
  <section class="game-view">
    <div class="game-level">
      <div class="game-level-intro">
        <h1 class="game-title">Stage 2 - What is going on with HTML/CSS</h1>
        <div>
          Congrats to our
          <span class="text-color-vue-entry">Vue Apprentice</span> on acquiring
          the basic knowledge of how a web application was constructed from
          inside. As now it might no longer seems like a magic power to you when
          you are looking at the websites. How about looking into how a website
          was constructed in its very essence form.
        </div>
      </div>
      <div class="game-texts">
        <h3 class="game-text-title">
          What is <span class="text-color-vue-entry">CSS</span>
        </h3>
        <div>
          According to W3school.com, css is the language to style an html
          document, describing how html elements should be displayed. CSS is the
          abbreviation of
          <span class="text-color-vue-dark">Cascading Style Sheets</span>. In
          the industry we computer scientists don't like wordiness, so it is
          more preferred to use CSS. However as some ancient wise man said, the
          name itself could contain a lot of the information about the object.
          <br />
          <span class="text-color-vue-dark">Style sheets</span> simply describes
          the essential of css codes: it describes what style the html document
          is displayed to the users. <br />
          <span class="text-color-vue-dark">Cascading</span> however, indicates
          that the computer sees the css sheets cascade, in the other word from
          top to bottom. Keeping this in mind can solve a lot of difficulties
          for you in the future works, and we will talk about this a bit later.
        </div>
      </div>
      <div class="game-texts">
        <h3 class="game-text-title">How does CSS work</h3>
        <div>
          So how does CSS work? First, without CSS, the browsers will still
          render your html file, but in a rough way. It will simply have texts
          in each "div" rendered from top to bottom, with headers larger than
          plain texts. And the "div"s would only be "paragraph"s in your plain
          word (or pages for those Apple fans) documents. Which is
          <span class="text-color-vue-entry">BORING</span>. Therefore, we'll
          need CSS, to bring a little bit of
          <span class="text-color-vue-dark">Chic</span> to your plain documents.
          <br />
          With CSS, our ultimate weapon to knock down styling in webpages,
          allows us to declare styles properties for each components (parts) of
          your webpage. Generally, in a CSS file, you shall see some thing like
          the following.
          <code>
            <pre>
              selector
              {
                property1: value1;
                property2: value2;
              }
            </pre>
          </code>
          The selector would allow you to select the component you'd like to
          style, and the property-value pair inside the brackets are the styles
          you are giving to the component. While there are a lot of more
          technical explanations for this syntax, you can simply think of it as
          the case you are styling a couple of sentences in your word document.
          You are highlighting the sentence you are about to change with the
          selector. And say you are changing the font for that sentence,
          property will be that dropdown menu "font" and the value could be your
          nice ol' "Times New Roman"
          <br />
          <pre>
            <code>
              selector
              {
                property1: value1;
                property2: value2;
              }
            </code>
          </pre>
          Surely in css, we have a lot of ways to select the components, to make
          it very, very versatile. And the most common ones you'll be using are
          tag (with the tag name), class (with .classname), and id (with
          #classname). For example:
          <pre><code>{{codes}}</code></pre>
          With style:
          <pre><code>{{style_samples}}</code></pre>
          Will give you:
          <div class="inline-example">
            <div>Hello tag div</div>
            <div class="hello1">Hello 1 class</div>
            <div class="hello1">Hello 1 class 2</div>
            <div id="hello3">Hello 3 tag</div>
            <div>Hello tag div 2</div>
          </div>
          You should notice three major things: first, a selector will select
          everything that has tag, classname or id that matches the selector.
          And everything selected by this selector will be styled with the
          property-value pair. And as you can see, recall to the concept of
          cascading, the style that is given in the lower place will take over
          the style in the earlier place.
          <br />
          <span class="text-color-vue-dark">Note: </span>
          By the "supreme law" of CSS, each <code>id</code> should refer to only
          <span class="text-color-vue-dark">one</span> unique component in an
          html file. Or otherwise there's no difference between
          <code>id</code> and <code>class. </code> <br />
          Of course, css can be way more powerful than simply a font machine.
          You can set width, height, border, color, background color, shadow,
          animation, transition, and layout of your html. And simply with html
          and css, you can create amazon webpage components that look very cool.
          Following is a example of a "card" in a website, following the design
          principles of material design published by google. And for further
          understanding of CSS, you can always go to
          <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">
            Mdn Web docs
          </a>
          for more info
        </div>
        <div class="sample-card">
          <sample-card></sample-card>
          <pre><code>{{card_sample_code}}</code></pre>
        </div>
        <div class="group-words game-text">
          <h1>Tasks: Styling your web page</h1>
          Try to add something to your html file, and add style things that you
          added
          <br />
          <br />
          <h3>Download the Template</h3>
          <router-link to="/template"> Template Link </router-link>
          <br />
          <br />
          <h3>Style the contents</h3>
          We are giving you the plain html templates with lorem ipsum
          placeholders. Add information you would like to be presented in your
          web page, and style them nicely with plain css and html.
        </div>
      </div>

      <div class="game-quiz game-quiz-ready">
        <router-link to="../game/2/quiz">
          <button class="quiz-button">Go to Quiz</button>
        </router-link>
      </div>
    </div>
  </section>
</template>
