<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  num: number;
  finished: boolean;
}>();
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const jumping = false;
    const blinking = false;
    const html_code1 =
      '<div class="question"\n' +
      '  <div class="question-box"></div>\n' +
      '  <div class="question-box"></div>\n' +
      '  <div class="question-box"></div>\n' +
      '  <div class="question-box"></div>\n' +
      '  <div class="question-box"></div>\n' +
      '  <div class="question-box"></div>\n' +
      "</div>";
    const color = "green";
    const disp = "block";
    const flex_direction = "column";
    const gap = "0";
    const passed = false;
    return {
      jumping,
      blinking,
      html_code1,
      disp,
      flex_direction,
      gap,
      passed,
    };
  },
  methods: {
    blink() {
      console.log("b");
      this.blinking = true;
      setTimeout(() => {
        this.blinking = false;
      }, 300);
    },
    validate() {
      return (
        this.disp === "flex" &&
        this.flex_direction === "row" &&
        this.gap === "10px"
      );
    },
    conditional_blink() {
      if (this.validate()) {
        this.blink();
        this.passed = true;
      } else {
        this.passed = false;
      }
    },
    isDisabled() {
      return this.passed === false;
    },
  },
});

const jump = function () {
  return null;
};
</script>
<style scoped>
.page {
  flex: 1;
  min-height: 100%;
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

.game {
  width: 600px;
  border: 1px solid black;
  margin: auto;
  padding: 15px;
}

.rule {
  display: flex;
  flex-direction: row;
  gap: 10px;
  border: 1px solid #aaaaaa;
  width: 230px;
  margin-bottom: 10px;
}

.rule > .rule-box {
  background-color: #a1c754;
}

.rule:hover > .rule-box {
  background-color: #67ad5c;
  cursor: pointer;
}

.rule-box {
  color: red;
  width: 50px;
  height: 50px;
  border: 1px solid #aaaaaa;
}

.question {
  display: v-bind(disp);
  flex-direction: v-bind(flex_direction);
  gap: v-bind(gap);
  border: 1px solid #aaaaaa;
  width: 230px;
  margin-bottom: 10px;
}

.question > .question-box {
  background-color: #a1c754;
}

.question:hover > .question-box {
  background-color: #67ad5c;
  cursor: pointer;
}

.question-box {
  color: red;
  width: 50px;
  height: 50px;
  border: 1px solid #aaaaaa;
}

.question {
  color: v-bind(color);
}

.question:hover {
  cursor: pointer;
}

.hint-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.hint {
  background-color: var(--vue-color-secondary);
  width: 50px;
  height: 50px;
}

.blink {
  background-color: red;
  animation: blink 0.3s linear;
}

.code-seg {
  margin: 5px 0px 5px;
}

.code-seg .tab-1 {
  margin-left: 24px;
}

.next {
  background-color: #00939c;
}

.next:disabled {
  background-color: #8f8f8f;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>
<template>
  <div class="page">
    <div class="content-wrapper">
      <div class="game">
        <div class="action">
          <div class="rule" @click="blink">
            <div class="rule-box"></div>
            <div class="rule-box"></div>
            <div class="rule-box"></div>
            <div class="rule-box"></div>
          </div>
          <div class="rule" @click="blink">
            <div class="rule-box"></div>
            <div class="rule-box"></div>
            <div class="rule-box"></div>
            <div class="rule-box"></div>
          </div>
          <div class="question" @click="conditional_blink">
            <div class="question-box"></div>
            <div class="question-box"></div>
            <div class="question-box"></div>
            <div class="question-box"></div>
          </div>
          <div class="code-seg">
            <pre>{{ html_code1 }}</pre>
          </div>
          <div class="code-seg">
            .question {
            <div class="tab-1">
              display:
              <select v-model="disp" class="tuner-mode-dropdown">
                <option value="flex">flex</option>
                <option value="block">block</option>
                <option value="none">none</option>
              </select>
            </div>
            <div class="tab-1">
              flex-direction:
              <select v-model="flex_direction" class="tuner-mode-dropdown">
                <option value="row">row</option>
                <option value="column">column</option>
              </select>
            </div>
            <div class="tab-1">
              gap:
              <select v-model="gap" class="tuner-mode-dropdown">
                <option value="0">0</option>
                <option value="5px">5px</option>
                <option value="10px">10px</option>
              </select>
            </div>
            }
          </div>
        </div>
        <div class="hint-wrapper">
          <div class="hint" :class="{ blink: blinking }"></div>
          <button
            class="next button primary-button"
            :disabled="passed === false || !validate !== 'red'"
            @click="$emit('finished')"
            v-if="props.finished"
          >
            <span class="button-text">FINISHED</span>
          </button>
          <button
            class="next button primary-button"
            :disabled="passed === false || !validate()"
            @click="$emit('next')"
            v-else
          >
            <span class="button-text">HERE WE GO!</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
