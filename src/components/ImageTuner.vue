<script setup lang="ts">
import NavList from "@/components/NavList.vue";
const filename = "little-dorrit.gif";
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const imgWidth = 150;
    const imgHeight = 150;
    const imgWHRatio = 100;
    const imgOpacity = 1;
    const imgBorderRadius = 0;
    const imgFit = "contain";
    const mode = "height-width";
    const filter = {};
    const filterString = "";
    const filterMode = "";
    const disabledH = false;
    const disabledW = false;
    const disabledRatio = true;
    const codes = "codes";
    const snippet = {
      css_title: " \nCSS Part:\n",
      css_selector_upper: ".sample-img {\n",
      css_bg_color: "  background-color: " + "#4e4e4e" + ";\\n",
      css_width: "  width: " + imgWidth + "px" + ";\\n",
    };
    /*
    const snippet =
      " \n" +
      "CSS Part:\n" +
      ".sample-img {\n" +
      "  background-color: #4e4e4e;\n" +
      "  width: {{this.imgHeight}};\n" +
      "  height: ;\n" +
      "  object-fit: ;\n" +
      "  opacity: ;\n" +
      "  border-radius: ;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      "<button>Example</button>";
     */
    return {
      imgWidth,
      imgHeight,
      imgWHRatio,
      imgOpacity,
      imgBorderRadius,
      imgFit,
      mode,
      filter,
      filterString,
      filterMode,
      disabledH,
      disabledW,
      disabledRatio,
      codes,
      snippet,
    };
  },
  computed: {
    widthString(): string {
      return this.imgWidth + "px";
    },
    heightString(): string {
      return this.imgHeight + "px";
    },
    codeSnippet(): string {
      return (
        " \n" +
        "/* css */\n" +
        ".sample-img {\n" +
        "  width: " +
        this.widthString +
        ";\n" +
        "  height: " +
        this.heightString +
        ";\n" +
        "  object-fit: " +
        this.imgFit +
        ";\n" +
        "  opacity: " +
        this.imgOpacity +
        ";\n" +
        "  border-radius: " +
        this.imgBorderRadius +
        ";\n" +
        "}\n" +
        "\n" +
        "/* vue template */\n" +
        "<img\n" +
        "  :src=\"require('@/assets/images/books/' + filename)\"\n" +
        "  alt='image-sample'\n" +
        "  class='sample-img'\n" +
        "/>"
      );
    },
  },
  methods: {
    toggleHW() {
      if (this.mode == "height") {
        this.disabledH = false;
        this.disabledW = true;
        this.disabledRatio = false;
      } else if (this.mode == "width") {
        this.disabledH = true;
        this.disabledW = false;
        this.disabledRatio = false;
      } else if (this.mode == "auto") {
        this.disabledH = true;
        this.disabledW = false;
        this.disabledRatio = true;
      } else {
        this.disabledW = this.disabledH = false;
        this.disabledRatio = true;
      }
    },
    onHWChangeRatio() {
      if (this.mode == "height") {
        this.imgWidth = Math.round((this.imgHeight * this.imgWHRatio) / 100);
      } else if (this.mode == "width") {
        this.imgHeight = Math.round((100 * this.imgWidth) / this.imgWHRatio);
      }
    },
    clearFilterMode() {
      this.filter = "";
      this.filterMode = "";
    },
  },
});
</script>

<style scoped>
/*css*/
.page {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.image-tuner {
  min-width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
}
.tuner-selections {
  background-color: #fafafa;
  width: 50%;
}

.tuner-selections .tuner-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}

.tuner-selections .tuner-sliders {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  width: 90%;
}

.tuner-selections .tuner-sliders .tuner-slider {
  min-width: 80%;
}

.tuner-selections .tuner-mode-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tuner-selections .tuner-mode-selector .tuner-mode-dropdown {
  min-width: 50%;
}

.tuner-selections .tuner-radio {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.tuner-selections .tuner-radio .tuner-image-fit {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.tuner-selections .tuner-code-sample .tuner-code-titles {
  font-weight: bold;
}

.tuner-selections .tuner-code-sample .codes-form {
  margin-left: 25px;
  border-width: 1px;
  border-style: solid;
  border-color: orange;
  margin-top: 10px;
}

.tuner-display {
  background-color: #fafafa;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.tuner-display img {
  background-color: #4e4e4e;
  width: v-bind(imgWidth + "px");
  height: v-bind(imgHeight + "px");
  object-fit: v-bind(imgFit);
  opacity: v-bind(imgOpacity);
  border-radius: v-bind(imgBorderRadius + "%");
  filter: v-bind(filterString);
}

.tuner-display .img-auto {
  height: auto;
}
</style>

<template>
  <section class="page">
    <NavList></NavList>
    <div class="image-tuner">
      <div class="tuner-selections">
        <div class="tuner-mode-selector">
          <p>{{ codes }}</p>
          <select v-model="codes" class="tuner-mode-dropdown">
            <option value="sliders">Sliders</option>
            <option value="codes">Sample Codes</option>
          </select>
        </div>
        <div v-if="this.codes == 'codes'" class="tuner-code-sample">
          <div class="codes-form">
            <div class="tuner-code-titles">CSS part:</div>
            <div class="tuner-code-tags">.sample-img {</div>
            <div class="tuner-code-inputs">&emsp;background-color:</div>
            <label for="width-code">&emsp;width:</label>
            <input
              type="number"
              name="width-code"
              v-model="imgWidth"
              min="50"
              max="400"
              step="10"
            />
            <br />
            <label for="height-code">&emsp;height:</label>
            <input
              type="number"
              name="height-code"
              v-model="imgHeight"
              min="50"
              max="450"
              step="10"
            />
            <br />
            <label for="object-fit-code" class="tuner-code-inputs">
              &emsp;object-fit:
            </label>
            <input type="text" name="object-fit-code" v-model="imgFit" />
            <br />
            <label for="opacity-code" class="tuner-code-inputs"
              >&emsp;opacity:</label
            >
            <input
              type="number"
              name="opacity-code"
              v-model="imgOpacity"
              min="0"
              max="1"
              step="0.1"
            />
            <br />
            <label for="radius-code" class="tuner-code-inputs">
              &emsp;border-radius:
            </label>
            <input
              type="number"
              name="radius-code"
              v-model="imgBorderRadius"
              min="0"
              max="50"
              step="1"
            />
            <div class="tuner-code-tags">}</div>
          </div>
          <div class="codes-code">
            <pre>
            <code> {{ this.codeSnippet }} </code>
          </pre>
          </div>
        </div>
        <form v-else class="tuner-form">
          <div class="tuner-mode-selector">
            <p>Selected Mode: {{ mode }}</p>
            <select
              v-model="mode"
              @change="toggleHW"
              class="tuner-mode-dropdown"
            >
              <option value="height-width">Width & Height</option>
              <option value="auto">Auto Height</option>
              <optgroup label="Ratio Baseline">
                <option value="height">Height</option>
                <option value="width">Width</option>
              </optgroup>
            </select>
          </div>
          <div class="tuner-sliders">
            <label for="width">Width: {{ imgWidth }}</label>
            <input
              type="range"
              min="50"
              max="400"
              class="tuner-slider"
              name="width"
              v-model="imgWidth"
              :disabled="disabledW"
              @change="onHWChangeRatio"
            />
          </div>
          <div class="tuner-sliders">
            <label for="height">Height: {{ imgHeight }}</label>
            <input
              type="range"
              min="50"
              max="400"
              class="tuner-slider"
              name="height"
              v-model="imgHeight"
              :disabled="disabledH"
              @change="onHWChangeRatio"
            />
          </div>
          <div class="tuner-sliders">
            <label for="ratio">Ratio: {{ imgWHRatio }}% </label>
            <input
              type="range"
              min="10"
              max="200"
              step="10"
              class="tuner-slider"
              name="ratio"
              v-model="imgWHRatio"
              :disabled="disabledRatio"
              @change="onHWChangeRatio"
            />
          </div>
          <div class="tuner-sliders">
            <label for="opacity">Opacity: {{ imgOpacity }}</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              class="tuner-slider"
              name="opacity"
              v-model="imgOpacity"
            />
          </div>
          <div class="tuner-sliders">
            <label for="border-radius"
              >Border Radius: {{ imgBorderRadius }}%</label
            >
            <input
              type="range"
              min="0"
              max="50"
              class="tuner-slider"
              name="border-radius"
              v-model="imgBorderRadius"
            />
          </div>
          <div class="tuner-radio">
            <p>Please select image fit type</p>
            <div class="tuner-image-fit">
              <input
                type="radio"
                id="contain"
                v-model="imgFit"
                value="contain"
              />
              <label for="contain">contain</label>
            </div>
            <div class="tuner-image-fit">
              <input type="radio" id="fill" v-model="imgFit" value="fill" />
              <label for="fill">fill</label>
            </div>
            <div class="tuner-image-fit">
              <input type="radio" id="cover" v-model="imgFit" value="cover" />
              <label for="cover">cover</label>
            </div>
            <div class="tuner-image-fit">
              <input type="radio" id="none" v-model="imgFit" value="none" />
              <label for="none">none</label>
            </div>
            <div class="tuner-image-fit">
              <input
                type="radio"
                id="scale-down"
                v-model="imgFit"
                value="scale-down"
              />
              <label for="scale-down">scale-down</label>
            </div>
          </div>
          <div class="tuner-radio">
            <div class="filter-mode-header">
              <p>Please select image filter</p>
              <button @click="clearFilterMode">RESET</button>
            </div>
            <div class="tuner-image-fit">
              <input type="radio" id="blur" v-model="filterMode" value="blur" />
              <label for="blur">blur</label>
            </div>
            <div class="tuner-image-fit">
              <input
                type="radio"
                id="brightness"
                v-model="filterMode"
                value="brightness"
              />
              <label for="brightness">brightness</label>
            </div>
            <div class="tuner-image-fit">
              <input
                type="radio"
                id="contrast"
                v-model="filterMode"
                value="contrast"
              />
              <label for="contrast">contrast</label>
            </div>
            <div class="tuner-image-fit">
              <input
                type="radio"
                id="grayscale"
                v-model="filterMode"
                value="grayscale"
              />
              <label for="grayscale">grayscale</label>
            </div>
          </div>
        </form>
      </div>
      <div class="tuner-display">
        <img
          v-if="mode == 'auto'"
          :src="require('@/assets/images/books/' + filename)"
          alt="image-sample"
          class="img-auto"
        />
        <img
          v-else
          :src="require('@/assets/images/books/' + filename)"
          alt="image-sample"
        />
      </div>
    </div>
  </section>
</template>
