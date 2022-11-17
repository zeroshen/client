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
      {
        question: "What does Cascading mean?",
        answer: 0,
        options: [
          {
            content: "CSS files are processed by browser top to down",
            optionId: 0,
            quizId: 2,
          },
          {
            content: "We shall write web projects in waterfall method ",
            optionId: 1,
            quizId: 2,
          },
          {
            content:
              "We shall add an extra indent before each line to make css codes look like a cascading ",
            optionId: 2,
            quizId: 2,
          },
          {
            content:
              "CSS selectors can only be used once, like it was dropped down to a cascading",
            optionId: 3,
            quizId: 2,
          },
        ] as QuizOption[],
        selected: -1,
        descriptions: "",
      },
      {
        question: "Will html file be displayed without css",
        answer: 1,
        options: [
          { content: "No", optionId: 0, quizId: 3 },
          { content: "Yes", optionId: 1, quizId: 3 },
        ] as QuizOption[],
        selected: -1,
        descriptions: "",
      },
      {
        question:
          "Say you have <div class='hello'>Hello</div>, which css declaration should you use to accurately color it red",
        answer: 0,
        options: [
          { content: ".hello {color: red}", optionId: 0, quizId: 4 },
          { content: "hello {color: red}", optionId: 1, quizId: 4 },
          { content: "div {color: red}", optionId: 2, quizId: 4 },
          { content: "#hello {color: red}", optionId: 3, quizId: 4 },
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
.game-quiz {
  min-width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2rem;
}
</style>
<template>
  <section>
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
  </section>
</template>
