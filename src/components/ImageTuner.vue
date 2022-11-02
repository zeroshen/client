<script setup lang="ts">
const filename = "little-dorrit.gif";
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const imgWidth = 150;
    const imgHeight = 150;
    const imgWHRatio = 100;
    const imgOpacity = 100;
    const imgBorderRadius = 0;
    const imgFit = "contain";
    const mode = "height-width";
    const filter = {};
    const filterString = "";
    const filterMode = "";
    const disabledH = false;
    const disabledW = false;
    const disabledRatio = true;
    const codes = false;
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
    };
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
.image-tuner {
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
}
.tuner-selections {
  background-color: #fafafa;
  width: 50%;
}

.tuner-selections form {
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
  opacity: v-bind(imgOpacity/100);
  border-radius: v-bind(imgBorderRadius + "%");
  filter: v-bind(filterString);
}

.tuner-display .img-auto {
  height: auto;
}
</style>

<template>
  <div class="image-tuner">
    <div class="tuner-selections">
      <form>
        <div class="tuner-mode-selector">
          <select v-model="codes" class="tuner-mode-dropdown">
            <option value="false">Sliders</option>
            <option value="true">Sample Codes</option>
          </select>
        </div>
        <div class="tuner-mode-selector">
          <p>Selected Mode: {{ mode }}</p>
          <select v-model="mode" @change="toggleHW" class="tuner-mode-dropdown">
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
          <label for="opacity">Opacity: {{ imgOpacity / 100 }}</label>
          <input
            type="range"
            min="0"
            max="100"
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
            <input type="radio" id="contain" v-model="imgFit" value="contain" />
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
</template>
