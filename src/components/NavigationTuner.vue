<script setup lang="ts">
import NavLink from "@/components/NavList.vue";
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    const str =
      "\nCSS part: \n" +
      ".nav-container {\n" +
      "  background-color: #f7f4e8;\n" +
      "  width: 360px;\n" +
      "  border-radius: 25px;\n" +
      "}\n" +
      "\n" +
      ".nav-headline {\n" +
      "  margin: 20px 16px;\n" +
      "  color: #484738;\n" +
      "  /* 56px- */\n" +
      "}\n" +
      "\n" +
      ".nav-container li {\n" +
      "  line-height: 56px;\n" +
      "  margin: 0 28px;\n" +
      "}\n" +
      "\n" +
      ".nav-container .nav-active-indicator,\n" +
      "li:hover {\n" +
      "  padding: 0 16px;\n" +
      "  margin: 0 12px;\n" +
      "  border-radius: 25px 25px;\n" +
      "  background-color: #e6e4c4;\n" +
      "  cursor: pointer;\n" +
      "}\n" +
      ".nav-line-content {\n" +
      "  display: flex;\n" +
      "  justify-content: space-between;\n" +
      "}\n" +
      "\n" +
      ".nav-upper li:last-child .nav-line-content {\n" +
      "  border-bottom: 1px #787669 solid;\n" +
      "  width: 100%;\n" +
      "}\n" +
      "\n" +
      "i {\n" +
      "  width: 18px;\n" +
      "  height: 18px;\n" +
      "  text-align: center;\n" +
      "  margin-right: 12px;\n" +
      "  vertical-align: middle;\n" +
      "}\n" +
      "\n" +
      ".nav-lower i {\n" +
      "  font-size: 12px;\n" +
      "  text-align: center;\n" +
      "}\n\n" +
      "Vue template Part:\n" +
      '<div class="nav-container">\n' +
      '  <div class="nav-upper">\n' +
      '    <div class="nav-headline">Mail</div>\n' +
      "    <ul>\n" +
      '      <li class="nav-active-indicator">\n' +
      '        <div class="nav-line-content">\n' +
      '          <span><i class="fa-solid fa-envelope"></i>Inbox</span\n' +
      "          ><span>25</span>\n" +
      "        </div>\n" +
      "      </li>\n" +
      "      <li>\n" +
      '        <div class="nav-line-content">\n' +
      '          <span><i class="fa-solid fa-inbox"></i>Outbox</span>\n' +
      "        </div>\n" +
      "      </li>\n" +
      "      <li>\n" +
      '        <div class="nav-line-content">\n' +
      '          <span><i class="fa-solid fa-star"></i>Favorites</span>\n' +
      "        </div>\n" +
      "      </li>\n" +
      "      <li>\n" +
      '        <div class="nav-line-content">\n' +
      '          <span><i class="fa-solid fa-trash"></i>Trash</span>\n' +
      "        </div>\n" +
      "      </li>\n" +
      "    </ul>\n" +
      "  </div>\n" +
      '  <div class="nav-lower">\n' +
      '    <div class="nav-headline">Labels</div>\n' +
      "    <ul>\n" +
      "      <li>\n" +
      '        <div class="nav-line-content">\n' +
      '          <span><i class="fa-solid fa-circle"></i>label 1</span>\n' +
      "        </div>\n" +
      "      </li>\n" +
      "      <li>\n" +
      '        <div class="nav-line-content">\n' +
      '          <span><i class="fa-solid fa-diamond"></i>label 2</span>\n' +
      "        </div>\n" +
      "      </li>\n" +
      "      <li>\n" +
      '        <div class="nav-line-content">\n' +
      '          <span><i class="fa-solid fa-square"></i>label 3</span>\n' +
      "        </div>\n" +
      "      </li>\n" +
      "      <li>\n" +
      '        <div class="nav-line-content">\n' +
      '          <span><i class="fa-solid fa-diamond"></i>label 4</span>\n' +
      "        </div>\n" +
      "      </li>\n" +
      "    </ul>\n" +
      "  </div>\n" +
      "</div>";
    return { str };
  },
});
</script>
<style scoped>
.page {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex: 1;
  min-height: 100%;
  font-size: 16px;
  color: #111111;
}

.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: initial;
  padding: 50px;
}

.code-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightgrey;
}

code {
  padding: 0 12px;
  display: block;
  white-space: pre;
  background-color: lightgrey;
}

.components {
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  justify-content: center;
  align-items: initial;
  width: 100%;
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
  <div class="page">
    <nav-link></nav-link>
    <div class="content-wrapper">
      <h1>Navigation List</h1>
      <section class="components">
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
