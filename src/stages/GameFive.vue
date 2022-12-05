<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  num: number;
  finished: boolean;
}>();

import { useGameStore } from "@/store/game";
const gameStore = useGameStore();

const filename = "moby-dick.gif";
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
      "</div>";
    const passed = false;
    const aspr = "initial";
    const image_mw = "100%";
    const object_fit = "contain";
    const font_size = "12px";
    const font_size_title = "12px";
    const align_items = "flex-begin";
    const padding = "0";
    return {
      jumping,
      blinking,
      html_code1,
      aspr,
      image_mw,
      object_fit,
      passed,
      font_size,
      font_size_title,
      align_items,
      padding,
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
        this.image_mw === "100px" &&
        this.aspr === "1/1" &&
        this.object_fit === "cover" &&
        this.font_size_title === "24px" &&
        this.font_size === "12px" &&
        this.align_items === "center" &&
        this.padding === "12px"
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
.rule .rule-image {
  max-width: 100px;
  aspect-ratio: 1/1;
  object-fit: cover;
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

.rule .rule-description {
  flex: 1;
  font-size: 12px;
}

.rule-description .rule-title {
  font-size: 24px;
}

.question {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: v-bind(align_items);
  gap: 12px;
  max-width: 100%;
  padding: v-bind(padding);
  border: 1px solid black;
}

.question .question-image {
  max-width: v-bind(image_mw);
  aspect-ratio: v-bind(aspr);
  object-fit: v-bind(object_fit);
}

.question .question-description {
  flex: 1;
}

.question-description {
  font-size: v-bind(font_size);
}

.question-description .question-title {
  font-size: v-bind(font_size_title);
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
            <div class="rule-image-container">
              <img
                class="rule-image"
                :src="require('@/assets/images/books/' + filename)"
                alt="rule-image-sample"
              />
            </div>
            <div class="rule-description">
              <div class="rule-title">Ornare Aenean</div>
              <div class="rule-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="rule-info-sub">Congue quisque egestas diam in.</div>
            </div>
            <div class="rule-action">
              <button class="button rule-action-button" @click="blink">
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
          <div class="question">
            <div class="question-image-container">
              <img
                class="question-image"
                :src="require('@/assets/images/books/' + filename)"
                alt="rule-image-sample"
              />
            </div>
            <div class="question-description">
              <div class="question-title">Ornare Aenean</div>
              <div class="question-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="question-info">Congue quisque egestas diam in.</div>
            </div>
            <div class="question-action">
              <button
                class="button question-action-button"
                @click="conditional_blink"
              >
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
          <div class="code-seg">
            <pre>{{ html_code1 }}</pre>
          </div>
          <div class="code-seg">
            <div>.question {</div>
            <div class="tab-1">display: flex;</div>
            <div class="tab-1">flex-direction: row;</div>
            <div class="tab-1">justify-content: space-between;</div>
            <div class="tab-1">
              align-items:
              <select v-model="align_items" class="tuner-mode-dropdown">
                <option value="flex-begin">flex-begin</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
              </select>
            </div>
            <div class="tab-1">gap: 12px;</div>
            <div class="tab-1">max-width: 100%;</div>
            <div class="tab-1">
              padding:
              <select v-model="padding" class="tuner-mode-dropdown">
                <option value="0">0</option>
                <option value="6px">6px</option>
                <option value="12px">12px</option>
              </select>
            </div>
            <div class="tab-1">border: 1px solid black;</div>
            <div>}</div>
            <div></div>
            <div>.question .question-image {</div>
            <div class="tab-1">
              max-width:<select v-model="image_mw" class="tuner-mode-dropdown">
                <option value="100%">100%</option>
                <option value="5px">5px</option>
                <option value="100px">100px</option>
              </select>
            </div>
            <div class="tab-1">
              aspect-ratio:<select v-model="aspr" class="tuner-mode-dropdown">
                <option value="1/1">1/1</option>
                <option value="initial">initial</option>
                <option value="16/9">16/9</option>
              </select>
            </div>
            <div class="tab-1">
              object-fit:<select
                v-model="object_fit"
                class="tuner-mode-dropdown"
              >
                <option value="contain">contain</option>
                <option value="cover">cover</option>
                <option value="fill">fill</option>
              </select>
            </div>
            <div>}</div>
            <div></div>
            <div>.question .question-description {</div>
            <div class="tab-1">flex: 1;</div>
            <div class="tab-1">
              font-size:
              <select v-model="font_size" class="tuner-mode-dropdown">
                <option value="5px">5px</option>
                <option value="12px">12px</option>
                <option value="24px">20px</option>
                <option value="60px">60px</option>
              </select>
            </div>
            <div>}</div>
            <div></div>
            <div>.question-description .question-title{</div>
            <div class="tab-1">
              font-size:
              <select v-model="font_size_title" class="tuner-mode-dropdown">
                <option value="5px">5px</option>
                <option value="12px">12px</option>
                <option value="24px">24px</option>
                <option value="60px">60px</option>
              </select>
            </div>
            <div>}</div>
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
      </div>
    </div>
  </div>
</template>
