<script setup lang="ts">
import NavLink from "@/components/NavList.vue";
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const str =
      "\nCSS Part:\n" +
      ".components {\n" +
      "  padding: 15px 0;\n" +
      "}\n" +
      ".video-container video {\n" +
      "  width: 100%;\n" +
      "}\n" +
      "video::-webkit-media-controls-enclosure {\n" +
      "  border-radius: 0;\n" +
      "}" +
      "\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="video-container">\n' +
      '  <video controls preload="metadata">\n' +
      '  <source src="@/assets/audios/vid.mp4" type="audio/mpeg" />\n' +
      "  Your browser does not support the audio element.\n" +
      "  </video>\n" +
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
.video-container video {
  width: 100%;
}
video::-webkit-media-controls-enclosure {
  border-radius: 0;
}
</style>
<template>
  <div class="page">
    <NavLink></NavLink>
    <div class="content-wrapper">
      <h1>Video player</h1>
      <section class="components">
        <div class="video-container">
          <video controls preload="metadata">
            <source src="@/assets/audios/vid.mp4" type="audio/mpeg" />
            Your browser does not support the audio element.
          </video>
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
