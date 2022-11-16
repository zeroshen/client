<script setup lang="ts">
import QuizBox from "@/components/QuizBox.vue";
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
    return { questions, current };
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
      <div class="game-quiz game-quiz-ready">
        <quiz-box
          :question="getQuestion(current)"
          :num="0"
          :finished="this.current >= this.questions.length - 1"
          @answered="answered"
          @next="next"
          @finish="finish"
        ></quiz-box>
      </div>
    </div>
  </section>
</template>
