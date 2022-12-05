<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const current = 0;
    const codes =
      "              <div>Hello tag div</div>\n" +
      "              <div class='hello1'>Hello 1 class</div>\n" +
      "              <div class='hello1'>Hello 1 class 2</div>\n" +
      "              <div id='hello3'>Hello 3 tag</div>\n" +
      "              <div>Hello tag div 2</div>";
    const style_samples =
      "              div {\n" +
      "                color: red;\n" +
      "              }\n" +
      "              .hello1 {\n" +
      "                color: blue;\n" +
      "              }\n" +
      "              #hello2 {\n" +
      "                color: green;\n" +
      "              }\n";
    const card_sample_code =
      "\nCSS Part:\n" +
      ".card-sample {\n" +
      "  border-radius: 4px;\n" +
      "  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n" +
      "  color: black;\n" +
      "  margin: 8px;\n" +
      "  min-width: 290px;\n" +
      "  max-width: 400px;\n" +
      "  height: auto;\n" +
      "  overflow: hidden;" +
      "}\n" +
      ".card-sample .image-wrapper {\n" +
      "  position: relative;\n" +
      "}\n" +
      ".image-wrapper-16-9 {\n" +
      "  height: 0px;\n" +
      "  overflow: hidden;\n" +
      "  padding-bottom: 56.25%;\n" +
      "}\n" +
      ".image-wrapper-16-9 > img {\n" +
      "  width: 100%;\n" +
      "  height: auto;\n" +
      "}\n" +
      ".card-sample .card-texts {\n" +
      "  padding: 1rem;\n" +
      "}\n" +
      "\n" +
      ".card-sample .card-title {\n" +
      "  font-weight: bold;\n" +
      "  font-size: 2rem;\n" +
      "}\n" +
      "\n" +
      ".card-sample .card-sub-title {\n" +
      "  padding-top: 12px;\n" +
      "  color: grey;\n" +
      "}\n" +
      ".card-sample .card-description {\n" +
      "  padding-top: 12px;\n" +
      "  font-weight: normal;\n" +
      "  font-size: 1rem;\n" +
      "}\n" +
      "\n" +
      "Vue template Part:\n" +
      '<div class="card-sample">\n' +
      '  <div class="image-wrapper image-wrapper-16-9">\n' +
      "    <img\n" +
      '      class="card-image"\n' +
      "      :src=\"require('@/assets/images/books/' + filename)\"\n" +
      '      alt="card-image-sample"\n' +
      "    />\n" +
      "  </div>\n" +
      '    <div class="card-texts">\n' +
      '      <div class="card-title">tortor id ipsum</div>\n' +
      '         <div class="card-sub-title">ipsum lorem</div>\n' +
      '         <div class="card-description">\n' +
      "           Lorem ipsum dolor sit amet, \n" +
      "           consectetur adipiscing elit.\n" +
      "         </div>\n" +
      "    </div>\n" +
      "</div>";
    return { current, codes, style_samples, card_sample_code };
  },
  computed: {},
  methods: {},
});
</script>

<style scoped>
.game-view {
  flex: 1;
  min-height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
}

.game-level {
  display: flex;
  flex-direction: column;
  width: 85%;
  padding: 2rem 1rem;
}

.game-title {
  color: var(--vue-color-primary);
}

.game-quiz {
  min-width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2rem;
}
.game-texts {
  padding-top: 2rem;
}
.inline-example {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left: 10rem;
}

.inline-example div {
  color: red;
}

.inline-example .hello1 {
  color: blue;
}

.inline-example #hello3 {
  color: green;
}

.game-texts a {
  color: var(--vue-color-secondary-dark);
  font-weight: bold;
}

.group-words {
  padding: 40px 80px;
}

.game-text {
  font-family: "Times New Roman";
  font-style: italic;
  color: darkgray;
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

.nav-container {
  background-color: #f7f4e8;
  width: 360px;
  border-radius: 25px;
}

.nav-headline {
  margin: 20px 16px;
  color: #484738;
  /* 56px- */
}

.nav-container li {
  line-height: 56px;
  margin: 0 28px;
}

.nav-container .nav-active-indicator,
li:hover {
  padding: 0 16px;
  margin: 0 12px;
  border-radius: 25px 25px;
  background-color: #e6e4c4;
  cursor: pointer;
}
.nav-line-content {
  display: flex;
  justify-content: space-between;
}

.nav-upper li:last-child .nav-line-content {
  border-bottom: 1px #787669 solid;
  width: 100%;
}

i {
  width: 18px;
  height: 18px;
  text-align: center;
  margin-right: 12px;
  vertical-align: middle;
}

.nav-lower i {
  font-size: 12px;
  text-align: center;
}
</style>

<template>
  <section class="game-view">
    <div class="game-level">
      <div class="game-level-intro">
        <h1 class="game-title">Stage 4 - Components extended</h1>
        <div>
          Congrats to our
          <span class="text-color-vue-intermediate">Vue Apprentice</span> on
          acquiring the basic knowledge of vue components. Now it is possible
          for you to build a website with the basic components like
          <code>button</code>, <code>link</code>, or <code>span</code>. However,
          your website might still look just
          <span class="text-color-vue-dark">a bit too simple</span> with the
          basic components. So to take one step further, to make your webpage
          more advanced, we'll show you how to create more customized components
          with css styling.
        </div>
      </div>
      <div class="game-texts">
        <h3 class="game-text-title">
          Designing a <span class="text-color-vue-entry">Component</span>
        </h3>
        <div>
          I won't deny the fact that every programmer can design their own web
          page completely to their liking. However, at the end, a webpage is
          more than just a canvas for a designer's
          <span class="text-color-vue-dark">inspirations</span>, but it also
          needs to be
          <span class="text-color-vue-intermediate">practical</span>. At the end
          of the day, what a
          <span class="text-color-vue-intermediate">user</span> usually seeks in
          a webpage is the information delivered in the page. Therefore, the
          design of a webpage should serve to better present the information and
          make viewer more engaged to the information. Further, most websites
          now follow a more uniform design philosophy. And
          <span class="text-color-vue-intermediate">users</span> have developed
          a <span class="text-color-vue-intermediate">familiar pattern</span> of
          acquiring information taken from one website while using various
          different websites. Therefore, it is always a good idea to follow the
          common patterns to avoid giving the users a hard time, and unleash
          your creativity. Thinking about building a library with three rooms,
          one has a door open from left to right, one has right to left, one a
          "storage unit kind of door". Such a library can be confusing to
          occupy, since the way to get across the building is very inconsistent.
          <br />
          In general, today's web page would have a navigation bar (mostly
          header, sometimes side bar), a footer, and the main body. The
          navigation bar usually contains logo, possibly search bar, navigation
          links, and user's account info. The footer, in most cases, consists
          copyright information, description to the organization, and contacts
          or links to social media. The main body in the middle can be a bit
          more varying, but as the name suggests, it contains all the important
          information and utilities of this page.
        </div>
      </div>
      <div class="game-texts">
        <h3 class="game-text-title">Material Design</h3>
        <div>
          With these constraints, the design can still vary from website to
          website. For a beginner, one of the easiest practice is to follow a
          <span class="text-color-vue-intermediate">big/well-known</span>
          organization and see what they are doing. Among the most popular
          websites and apps today, like AirBnb, NetFlix, LinkedIn, Twitter, we
          choose the design system published by Google in this tutorial. The
          design system, Material Design, published by Google has design specs
          and guidelines publicly accessible. And it is proven to work as there
          are a lot of existing ui kits published based on Material Design
          everywhere. So why not try follow these design principles, and get an
          understanding on the design of ui as well as how to build a website.
          <br />
          Below is an example of navigation drawer implemented following the
          material design. You can find the code snippets in template
          <div class="nav-container">
            <div class="nav-upper">
              <div class="nav-headline">Mail</div>
              <ul>
                <li class="nav-active-indicator">
                  <div class="nav-line-content">
                    <span><i class="fa-solid fa-envelope"></i>Inbox</span
                    ><span>25</span>
                  </div>
                </li>
                <li>
                  <div class="nav-line-content">
                    <span><i class="fa-solid fa-inbox"></i>Outbox</span>
                  </div>
                </li>
                <li>
                  <div class="nav-line-content">
                    <span><i class="fa-solid fa-star"></i>Favorites</span>
                  </div>
                </li>
                <li>
                  <div class="nav-line-content">
                    <span><i class="fa-solid fa-trash"></i>Trash</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="nav-lower">
              <div class="nav-headline">Labels</div>
              <ul>
                <li>
                  <div class="nav-line-content">
                    <span><i class="fa-solid fa-circle"></i>label 1</span>
                  </div>
                </li>
                <li>
                  <div class="nav-line-content">
                    <span><i class="fa-solid fa-diamond"></i>label 2</span>
                  </div>
                </li>
                <li>
                  <div class="nav-line-content">
                    <span><i class="fa-solid fa-square"></i>label 3</span>
                  </div>
                </li>
                <li>
                  <div class="nav-line-content">
                    <span><i class="fa-solid fa-diamond"></i>label 4</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="game-texts">
        <div class="group-words game-text">
          <h1>Tasks: Build your customized components</h1>
          Try to build your components following the design guidelines of
          Material Design
          <br />
          <br />
          <h3>Download the Template</h3>
          <router-link to="/template"> Template Link </router-link>
          <br />
          <br />
          <h3>
            Remember when you are modifying the template, try also look at the
            design specs in the official documentation of material design
          </h3>
          <a href="https://m3.material.io/foundations">
            Link to documentation
          </a>
          <br />
          <br />
          <h3>Style the components</h3>
          We have gave you an example of navigation drawer, which includes
          styling properties of border, layout, margin, padding, colors, and
          alignment following the design guidelines of Material Design. Try
          modify another components in the template which you think would be
          useful for your page.
        </div>
      </div>

      <div class="game-quiz game-quiz-ready">
        <router-link to="../game/4/quiz">
          <button class="quiz-button">Go to Quiz</button>
        </router-link>
      </div>
    </div>
  </section>
</template>
