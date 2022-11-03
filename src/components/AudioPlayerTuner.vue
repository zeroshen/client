<script setup lang="ts">
import NavLink from "@/components/NavList.vue";
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const str =
      "\nCSS Part:\n" +
      ".audio-container audio {\n" +
      "  width: 100%;\n" +
      "}\n" +
      "audio::-webkit-media-controls-enclosure {\n" +
      "  border-radius: 0;\n" +
      "  background-color: #a1c754;\n" +
      "}" +
      "\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="audio-container">\n' +
      '  <audio controls preload="metadata">\n' +
      '    <source src="@/assets/audios/sample4.mp3" type="audio/mpeg" />\n' +
      "    Your browser does not support the audio element.\n" +
      "  </audio>\n" +
      "</div>\n";
    return {
      str,
    };
  },
});
</script>
<style>
.components {
  padding: 15px 0;
}
.audio-container audio {
  width: 100%;
}
audio::-webkit-media-controls-enclosure {
  border-radius: 0;
  background-color: #a1c754;
}
</style>
<template>
  <div class="page">
    <NavLink></NavLink>
    <div class="content-wrapper">
      <h1>Audio player</h1>
      <section class="components">
        <div class="audio-container">
          <audio controls preload="metadata">
            <source src="@/assets/audios/sample4.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>
      <section class="code-container">
        <pre>
        <code>
         {{str}}
        </code>
        </pre>
      </section>
    </div>
  </div>
</template>
