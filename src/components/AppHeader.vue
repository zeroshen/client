<script setup lang="ts"></script>

<style scoped>
header {
  background: var(--secondary-background-color);
  display: flex;
  flex-direction: row;
  padding: 1em;
  gap: 1em;
}

.text-logo {
  font-family: var(--title-font-family);
}

.search-bar {
  padding: 0.5em;
}

@media (max-width: 600px) {
  header {
    flex-direction: column;
  }
}
</style>

<template>
  <header class="container">
    <section class="bookstore-logo">
      <router-link to="/">
        <img
          src="@/assets/images/site/bookstore-logo.png"
          alt="Another Bookstore Logo"
          width="150px"
          height="auto"
        />
      </router-link>
    </section>
    <section class="title-and-search-bar">
      <h1>
        <router-link to="/" class="text-logo"> Another Bookstore </router-link>
      </h1>
      <form action="category.html">
        <input type="text" class="search-bar" /><br />
        <input type="submit" class="button search-button" value="Search" />
      </form>
    </section>
    <section class="header-dropdown-and-cart">
      <button class="button">cart (0)</button>
      <button class="button">login</button>
    </section>
  </header>
</template>
