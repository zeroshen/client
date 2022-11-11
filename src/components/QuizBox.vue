<script setup lang="ts">
import { defineProps } from "vue";
import { QuizItem } from "@/types";
const props = defineProps<{
  question: QuizItem;
  num: number;
  finished: boolean;
}>();
</script>
<script lang="ts"></script>
<style scoped>
.quiz-box {
  width: 80%;
  height: 100%;
  padding: 1rem 0.5rem;
  background-color: #00939c;
  color: #fafafa;
  display: flex;
  flex-direction: column;
}

.quiz-lower {
  min-width: 100%;
}

.quiz-answer {
  display: flex;
  justify-content: center;
}

.quiz-actions {
  display: flex;
  justify-content: flex-end;
  padding-right: 0;
  margin-right: 10%;
}
.quiz-button {
  cursor: pointer;
  background-color: var(--vue-color-secondary);
  width: 80%;
  color: #fafafa;
  text-transform: uppercase;
  margin: 10px 5px;
  padding: 10px;
  border: none;
}
.quiz-button:hover {
  background-color: var(--vue-color-secondary-dark);
}
.quiz-button:disabled {
  opacity: 0.5;
}

.quiz-button.correct {
  background-color: #2cce7d;
}
.quiz-button.wrong {
  background-color: #ff5a5f;
}

.quiz-button.disabled {
  opacity: 0.5;
}

.action-button {
  cursor: pointer;
  background-color: var(--vue-color-secondary);
  color: #fafafa;
  text-transform: uppercase;
  margin: 10px 0 10px 5px;
  padding: 10px;
  border: none;
}

.action-button:hover {
  background-color: var(--vue-color-secondary-dark);
}

@media (max-width: 900px) {
  .quiz-box {
    width: 100%;
  }
}
</style>
<template>
  <section class="quiz-box">
    <h1 class="quiz-title">{{ props.question.question }}</h1>
    <h3 class="quiz-description" v-if="props.question.descriptions !== ''">
      {{ props.question.descriptions }}
    </h3>
    <div class="quiz-lower">
      <div class="quiz-answers">
        <div
          class="quiz-answer"
          v-for="q in props.question.options"
          :key="q.optionId"
        >
          <button
            class="quiz-button"
            @click="$emit('answered', q.optionId, q.quizId)"
            :class="` ${
              props.question.selected == q.optionId
                ? q.optionId == props.question.answer
                  ? 'correct'
                  : 'wrong'
                : ''
            } ${
              props.question.selected != -1 &&
              q.optionId != props.question.selected
                ? 'disabled'
                : ''
            }`"
            :disabled="
              props.question.selected == props.question.answer &&
              q.optionId != props.question.selected
            "
          >
            {{ q.content }}
          </button>
        </div>
      </div>
      <div class="quiz-actions">
        <button
          class="action-button"
          v-if="
            props.question.selected == props.question.answer && !props.finished
          "
          @click="$emit('next')"
        >
          Next
        </button>
        <button
          class="action-button finish-button"
          v-else
          @click="$emit('finish')"
        >
          Finish
        </button>
      </div>
    </div>
  </section>
</template>
