<script setup></script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const sample_code =
      "\n<section>\n" +
      '    <div id = "component_test">\n' +
      "       <testcomponent></testcomponent>\n" +
      "    </div>\n" +
      '    <div id = "component_test1">\n' +
      "       <testcomponent></testcomponent>\n" +
      "    </div>\n" +
      "</section>\n";
    return { sample_code };
  },
  computed: {},
  methods: {},
});
</script>
<style scoped>
.page-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.group-words {
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 80px;
  padding-left: 80px;
}
.quiz-button {
  background-color: #00939c;
  color: #fafafa;
  border: none;
}

.quiz-button:hover {
  background-color: #016f75;
  color: #fafafa;
  border: none;
  cursor: pointer;
}
.game-text {
  font-family: "Times New Roman";
  font-style: italic;
  color: darkgray;
}
.game-quiz {
  min-width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2rem;
  margin-bottom: 40px;
}
</style>

<template>
  <section class="page-view">
    <div class="group-words">
      <h1 style="color: var(--vue-color-primary)">Stage 3 - Components</h1>
    </div>
    <div class="group-words">
      <h1>Components Basics</h1>
      Components allow us to split the UI into independent and reusable pieces,
      and think about each piece in isolation. It's common for an app to be
      organized into a tree of nested components.
      <br />
      This is very similar to how we nest native HTML elements, but Vue
      implements its own component model that allow us to encapsulate custom
      content and logic in each component. Vue also plays nicely with native Web
      Components. If you are curious about the relationship between Vue
      Components and native Web Components.
    </div>
    <div class="group-words">
      <h1>Using a Component</h1>
      To use a child component, we need to import it in the parent component.
      Assuming we placed our counter component inside a file called
      ButtonCounter.vue, the component will be exposed as the file's default
      export:
      <br />
      To expose the imported component to our template, we need to register it
      with the components option. The component will then be available as a tag
      using the key it is registered under.
      <br />
      It's also possible to globally register a component, making it available
      to all components in a given app without having to import it. The pros and
      cons of global vs. local registration is discussed in the dedicated
      Component Registration section.
      <br />
      Components can be reused as many times as you want.
    </div>
    <div class="group-words">
      <h1>Example Usage</h1>
      Vue Components are one of the important features of VueJS that creates
      custom elements, which can be reused in HTML. Let???s work with an example
      and create a component, that will give a better understanding on how
      components work with VueJS.Here is the example:
      <br />
      <div class="sample-card">
        <pre><code>{{sample_code}}</code></pre>
      </div>
      <br />
      In the .vue file, we have created two div with id component_test and
      component_test1. In the other .vue files, two Vue instances are created
      with the div ids. We have created a common component to be used with both
      the view instances.
    </div>

    <div class="group-words game-text">
      <h1>Try to Build Your Own Components</h1>
      Mary has been familiar with structure of vue file, and she tried to write
      some CSS codes for the websites. It is time for her to build some
      components for the website, and then she could maintain the websites
      conveniently.
      <br />
      <br />
      <h3>Try to Build a Button</h3>
      Do something in the template file(TODO tags)
      <br />
      <br />
      <h3>Try to Build a Link</h3>
      Do something in the template file(TODO tags)
      <br />
      <br />
      <h3>Try to Build a Input</h3>
      Do something in the template file(TODO tags)
    </div>
    <div class="game-quiz">
      <router-link to="../game/3/quiz">
        <button class="quiz-button">Go to Quiz</button>
      </router-link>
    </div>
  </section>
</template>
