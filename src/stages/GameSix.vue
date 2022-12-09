<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  num: number;
  finished: boolean;
}>();

import { useGameStore } from "@/store/game";
const gameStore = useGameStore();
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const jumping = false;
    const blinking = false;
    const html_code1 =
      '<div class="question-top-bar">\n' +
      '  <div class="question-title">\n' +
      "    Lorem Ipsum\n" +
      "  </div>\n" +
      '<div class="question-actions">\n' +
      "  <div\n" +
      '    class="question-action"\n' +
      "  >\n" +
      "...\n" +
      "</div>";
    const passed = false;
    const selected = 1;
    const disp = "block";
    const flex_d = "column";
    const justify = "flex-start";
    const align = "flex-start";
    const disp_sub = "block";
    const flex_d_sub = "column";
    return {
      jumping,
      blinking,
      html_code1,
      passed,
      selected,
      disp,
      flex_d,
      justify,
      align,
      disp_sub,
      flex_d_sub,
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
        this.flex_d === "row" &&
        this.justify === "space-between" &&
        this.align === "center" &&
        this.disp_sub === "flex" &&
        this.flex_d_sub === "row"
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
    setSelected(i: number) {
      this.selected = i;
    },
  },
});
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
  width: 750px;
  border: 1px solid black;
  margin: auto;
  padding: 15px;
}

.action {
  margin-bottom: 0.5rem;
}

.rule {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  max-width: 100%;
  padding: 12px;
  border: 1px solid black;
}

.rule-top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.rule-top-bar .rule-title {
  font-size: 40px;
}

.rule-top-bar .rule-title:hover {
  color: var(--vue-color-secondary-dark);
  cursor: pointer;
}

.rule-top-bar .rule-actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
}

.rule-top-bar .rule-action:hover {
  color: var(--vue-color-secondary-dark);
  cursor: pointer;
}

.selected_nav {
  color: var(--vue-color-secondary-dark);
}

.question {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  max-width: 100%;
  padding: 12px;
  border: 1px solid black;
}

.question-top-bar {
  display: v-bind(disp);
  flex-direction: v-bind(flex_d);
  width: 100%;
  justify-content: v-bind(justify);
  align-items: v-bind(align);
}

.question-top-bar .question-title {
  font-size: 40px;
}

.question-top-bar .question-title:hover {
  color: var(--vue-color-secondary-dark);
  cursor: pointer;
}

.question-top-bar .question-actions {
  display: v-bind(disp_sub);
  flex-direction: v-bind(flex_d_sub);
  gap: 12px;
}

.question-top-bar .question-action:hover {
  color: var(--vue-color-secondary-dark);
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

.next:hover {
  background-color: #016f75;
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
            <div class="rule-top-bar">
              <div class="rule-title" @click="blink">Lorem Ipsum</div>
              <div class="rule-actions">
                <div
                  class="rule-action"
                  :class="{ selected_nav: selected === 1 }"
                  @click="setSelected(1)"
                >
                  About Me
                </div>
                <div
                  class="rule-action"
                  :class="{ selected_nav: selected === 2 }"
                  @click="setSelected(2)"
                >
                  Works
                </div>
                <div
                  class="rule-action"
                  :class="{ selected_nav: selected === 3 }"
                  @click="setSelected(3)"
                >
                  Manifesto
                </div>
              </div>
            </div>
          </div>
          <div class="question">
            <div class="question-top-bar">
              <div class="question-title" @click="conditional_blink">
                Lorem Ipsum
              </div>
              <div class="question-actions">
                <div
                  class="question-action"
                  :class="{ selected_nav: selected === 1 }"
                  @click="setSelected(1)"
                >
                  About Me
                </div>
                <div
                  class="question-action"
                  :class="{ selected_nav: selected === 2 }"
                  @click="setSelected(2)"
                >
                  Works
                </div>
                <div
                  class="question-action"
                  :class="{ selected_nav: selected === 3 }"
                  @click="setSelected(3)"
                >
                  Manifesto
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hint-wrapper">
          <div class="hint" :class="{ blink: blinking }"></div>
          <button
            class="next button primary-button"
            :disabled="passed === false || !validate()"
            @click="
              gameStore.add(1004);
              $emit('finished');
            "
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
        <div class="code-seg">
          <pre>{{ html_code1 }}</pre>
        </div>
        <div class="code-seg">
          .question-top-bar {
          <div class="tab-1">
            display:
            <select v-model="disp" class="tuner-mode-dropdown">
              <option value="flex">flex</option>
              <option value="block">block</option>
              <option value="none">none</option>
              <option value="grid">grid</option>
            </select>
          </div>
          <div class="tab-1">
            flex-direction:
            <select v-model="flex_d" class="tuner-mode-dropdown">
              <option value="row">row</option>
              <option value="column">column</option>
            </select>
          </div>
          <div class="tab-1">width: 100%;</div>
          <div class="tab-1">
            justify-content:
            <select v-model="justify" class="tuner-mode-dropdown">
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="space-between">space-between</option>
              <option value="space-around">space-around</option>
            </select>
          </div>
          <div class="tab-1">
            align-items:
            <select v-model="align" class="tuner-mode-dropdown">
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="center">center</option>
            </select>
          </div>
          <div>}</div>
          <div class="tab-1">...</div>
          .question-top-bar .question-actions {
          <div class="tab-1">
            display:
            <select v-model="disp_sub" class="tuner-mode-dropdown">
              <option value="flex">flex</option>
              <option value="block">block</option>
              <option value="none">none</option>
              <option value="grid">grid</option>
            </select>
          </div>
          <div class="tab-1">
            flex-direction:
            <select v-model="flex_d_sub" class="tuner-mode-dropdown">
              <option value="row">row</option>
              <option value="column">column</option>
            </select>
          </div>
          <div class="tab-1">gap: 12px;</div>

          <div>}</div>
        </div>
      </div>
    </div>
  </div>
</template>
