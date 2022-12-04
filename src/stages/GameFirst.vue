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
    const html_code1 = "<span id='what-about-me'>What about me??</span>";
    const color = "green";
    const passed = false;
    return { jumping, blinking, html_code1, color, passed };
  },
  methods: {
    blink() {
      console.log("b");
      this.blinking = true;
      setTimeout(() => {
        this.blinking = false;
      }, 300);
    },
    conditional_blink() {
      if (this.color === "red") {
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
  color: red;
}

.rule-text:hover {
  cursor: pointer;
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
          <div class="rule">
            <span class="rule-text" @click="blink">click me!!!</span>
          </div>
          <div class="rule">
            <span class="rule-text" @click="blink">now try me!!!</span>
          </div>
          <div class="question" @click="conditional_blink">What about me??</div>
          <div class="code-seg">{{ html_code1 }}</div>
          <div class="code-seg">
            #what-about-me { color:
            <select v-model="color" class="tuner-mode-dropdown">
              <option value="yellow">yellow</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="orange">orange</option>
            </select>
            }
          </div>
        </div>
        <div class="hint-wrapper">
          <div class="hint" :class="{ blink: blinking }"></div>
          <button
            class="next button primary-button"
            :disabled="passed === false || color !== 'red'"
            @click="$emit('finished')"
            v-if="props.finished"
          >
            <span class="button-text">FINISHED</span>
          </button>
          <button
            class="next button primary-button"
            :disabled="passed === false || color !== 'red'"
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
