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
      '<button id="what-about-me">\n' +
      "  <span>What about me??</span>\n" +
      "</button>";
    const color = "green";
    const border_radius = "0";
    const bgcolor = "none";
    const padding = "0px";
    const font_size = "10px";
    const hover_color = "orange";
    const passed = false;
    return {
      jumping,
      blinking,
      html_code1,
      color,
      border_radius,
      bgcolor,
      padding,
      font_size,
      hover_color,
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
        this.color === "#fafafa" &&
        this.padding === "10px 24px" &&
        this.border_radius === "5px" &&
        this.font_size === "20px" &&
        this.bgcolor === "#016f75" &&
        this.hover_color === "#004d51"
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

.action > div {
  margin: 12px;
}

.rule-text {
  background-color: #016f75;
  color: #fafafa;
  border: none;
  padding: 10px 24px;
  border-radius: 5px;
  font-size: 20px;
}

.rule-text:hover {
  cursor: pointer;
  background-color: #004d51;
}

#question-button {
  background-color: v-bind(bgcolor);
  color: v-bind(color);
  border: none;
  padding: v-bind(padding);
  border-radius: v-bind(border_radius);
  font-size: v-bind(font_size);
}

#question-button:hover {
  cursor: pointer;
  background-color: v-bind(hover_color);
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
          <div class="rule">
            <button class="rule-text" @click="blink">
              <span class="button-text">click me!!!</span>
            </button>
          </div>
          <div class="rule">
            <button class="rule-text" @click="blink">
              <span class="button-text">now try me!!!</span>
            </button>
          </div>
          <div class="question">
            <button id="question-button" @click="conditional_blink">
              <span>What about me??</span>
            </button>
          </div>
          <div class="code-seg">
            <pre>{{ html_code1 }}</pre>
          </div>
          <div class="code-seg">
            <div>#what-about-me {</div>
            <div class="tab-1">
              background-color:
              <select v-model="bgcolor" class="tuner-mode-dropdown">
                <option value="red">red</option>
                <option value="none">none</option>
                <option value="#016f75">#016f75</option>
              </select>
            </div>
            <div class="tab-1">
              color:
              <select v-model="color" class="tuner-mode-dropdown">
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="#016f75">#016f75</option>
                <option value="#fafafa">#fafafa</option>
              </select>
            </div>
            <div class="tab-1">
              padding:
              <select v-model="padding" class="tuner-mode-dropdown">
                <option value="0px">0px</option>
                <option value="10px 24px">10px 24px</option>
                <option value="10px">10px</option>
                <option value="10px 20px">10px 20px</option>
                <option value="10px 20px 5px">10px 20px 5px</option>
                <option value="0px 5px 10px 20px">0px 5px 10px 20px</option>
              </select>
            </div>
            <div class="tab-1">
              border-radius:
              <select v-model="border_radius" class="tuner-mode-dropdown">
                <option value="0">0</option>
                <option value="5px">5px</option>
                <option value="10px">10px</option>
                <option value="20px">20px</option>
              </select>
            </div>
            <div class="tab-1">
              font-size:
              <select v-model="font_size" class="tuner-mode-dropdown">
                <option value="5px">5px</option>
                <option value="10px">10px</option>
                <option value="20px">20px</option>
                <option value="50px">50px</option>
              </select>
            </div>
            }
            <div>#what-about-me:hover {</div>
            <div class="tab-1">cursor: pointer;</div>
            <div class="tab-1">
              color:
              <select v-model="hover_color" class="tuner-mode-dropdown">
                <option value="red">red</option>
                <option value="orange">orange</option>
                <option value="#004d51">#004d51</option>
                <option value="#fafafa">#fafafa</option>
              </select>
            </div>
            <div>}</div>
          </div>
        </div>
        <div class="hint-wrapper">
          <div class="hint" :class="{ blink: blinking }"></div>
          <button
            class="next button primary-button"
            :disabled="passed === false || validate() != true"
            @click="$emit('finished')"
            v-if="props.finished"
          >
            <span class="button-text">FINISHED</span>
          </button>
          <button
            class="next button primary-button"
            :disabled="passed === false || validate() != true"
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
