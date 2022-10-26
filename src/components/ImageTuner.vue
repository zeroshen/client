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
    const imgFit = "contain";
    const mode = "height-width";
    const disabledH = false;
    const disabledW = false;
    const disabledRatio = true;
    return {
      imgWidth,
      imgHeight,
      imgWHRatio,
      imgFit,
      mode,
      disabledH,
      disabledW,
      disabledRatio,
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
  },
});
</script>

<style scoped>
.image-tuner {
  background-color: #afafaf;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
}
.tuner-selections {
  background-color: #fafafa;
  width: 50%;
}

.tuner-selections form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tuner-selections .tuner-sliders {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 75%;
}

.tuner-selections .tuner-sliders .tuner-slider {
  min-width: 80%;
}

.tuner-selections .tuner-radio {
  display: flex;
  flex-direction: column;
}

.tuner-selections .tuner-radio .tuner-image-fit {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.tuner-display {
  background-color: orange;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="image-tuner">
    <div class="tuner-selections">
      <form>
        <div class="tuner-mode-selector">
          Selected Mode: {{ mode }} <br />
          <select v-model="mode" @change="toggleHW">
            <option value="height-width">Width & Height</option>
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
            max="225"
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
            max="225"
            class="tuner-slider"
            name="height"
            v-model="imgHeight"
            :disabled="disabledH"
            @change="onHWChangeRatio"
          />
        </div>
        <div class="tuner-sliders">
          <label for="ratio">Image Width/Height ratio: {{ imgWHRatio }}%</label>
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
      </form>
    </div>
    <div class="tuner-display">
      <img
        :src="require('@/assets/images/books/' + filename)"
        alt="image-sample"
      />
    </div>
  </div>
</template>
