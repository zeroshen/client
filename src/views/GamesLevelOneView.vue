<script setup></script>

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
  margin: 40px;
}
li {
  list-style-type: circle;
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
</style>

<template>
  <section class="page-view">
    <div class="group-words">
      <h1 style="color: var(--vue-color-primary)">Stage 1 - Introduction</h1>
    </div>
    <div class="group-words">
      <h1>What is Vue?</h1>
      Vue (pronounced /vjuː/, like view) is a JavaScript framework for building
      user interfaces. It builds on top of standard HTML, CSS, and JavaScript
      and provides a declarative and component-based programming model that
      helps you efficiently develop user interfaces, be they simple or complex.
    </div>
    <div class="group-words">
      <h1>The Progressive Framework</h1>
      Vue is a framework and ecosystem that covers most of the common features
      needed in frontend development. But the web is extremely diverse - the
      things we build on the web may vary drastically in form and scale. With
      that in mind, Vue is designed to be flexible and incrementally adoptable.
      Depending on your use case, Vue can be used in different ways:
      <br />
      Enhancing static HTML without a build step
      <br />
      Embedding as Web Components on any page
      <br />
      Single-Page Application (SPA)
      <br />
      Fullstack / Server-Side Rendering (SSR)
      <br />
      Jamstack / Static Site Generation (SSG)
      <br />
      Targeting desktop, mobile, WebGL, and even the terminal
      <br />
      If you find these concepts intimidating, don't worry! The tutorial and
      guide only require basic HTML and JavaScript knowledge, and you should be
      able to follow along without being an expert in any of these.
      <br />
      If you are an experienced developer interested in how to best integrate
      Vue into your stack, or you are curious about what these terms mean, we
      discuss them in more detail in Ways of Using Vue.
      <br />
      Despite the flexibility, the core knowledge about how Vue works is shared
      across all these use cases. Even if you are just a beginner now, the
      knowledge gained along the way will stay useful as you grow to tackle more
      ambitious goals in the future. If you are a veteran, you can pick the
      optimal way to leverage Vue based on the problems you are trying to solve,
      while retaining the same productivity. This is why we call Vue "The
      Progressive Framework": it's a framework that can grow with you and adapt
      to your needs.
    </div>
    <div class="group-words">
      <h1>Start with IntelliJ</h1>
      The recommended requirements for running IntelliJ IDEA are the following:
      <br />
      <ul>
        <li>The latest 64-bit Mac OS, or</li>
        <li>64-bit Windows 10, and</li>
        <li>8 GB RAM, and</li>
        <li>an SSD Drive with 5GB of free space, and</li>
        <li>monitor with 1920x1080 resolution</li>
      </ul>

      It's possible to run IntelliJ with less than 8 GB of RAM, but it can be
      slow. It's possible to run IntelliJ with a regular hard drive, but it
      takes a while to boot up. We highly recommend these requirements.
      <br />
      To setup the environment for your web applications, do the following:
      <br />
      <ul>
        <li>Step 1: Create a working directory</li>
        <li>Step 2. Check for Java 11</li>
        <li>Step 3: Install IntelliJ IDEA Ultimate</li>
        <li>Step 4: Install Tomcat 9</li>
        <li>Step 5: Install Node JS</li>
        <li>Step 6: Install Vue CLI</li>
        <li>Step 7: Install the Vue plugin for IntelliJ</li>
        <li>Step 8: Install the Vue devtools extension for Chrome</li>
        <li>
          Step 9: Create the client module. It will take you to a terminal
          window inside of IntelliJ. Choose Automatically choose features.
        </li>
      </ul>
    </div>
    <div class="group-words game-text">
      <h1>Start to Build a Website</h1>
      Mary is a graduate student in a college. Now, she want to build her own
      website to show the profile and experience of her. (You could follow the
      steps below. It is fine for you to get the resources from the components
      pages or online.)
      <br />
      <br />
      <h3>Download the Template</h3>
      <router-link to="/template"> Template Link </router-link>
      <br />
      <br />
      <h3>Try to Print Something</h3>
      Try to print something in console, you could modify the code in the
      "script" tag.
    </div>
    <router-link to="../game/1/quiz">
      <button class="quiz-button">Go to Quiz</button>
    </router-link>
  </section>
</template>
