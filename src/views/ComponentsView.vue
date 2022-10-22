<script setup lang="ts">
import { BookItem } from "@/types";
const bookList: BookItem[] = [
  {
    bookId: 1001,
    title: "The Iliad",
    author: "Homer",
    price: 699,
    isPublic: true,
  },
  {
    bookId: 1002,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoyevski",
    price: 1399,
    isPublic: false,
  },
  {
    bookId: 1003,
    title: "Little Dorrit",
    author: "Charles Dickens",
    price: 599,
    isPublic: true,
  },
  {
    bookId: 1004,
    title: "Moby Dick",
    author: "Herman Melville",
    price: 699,
    isPublic: true,
  },
];
</script>

<template>
  <div>Components</div>
</template>
