<template>
  <div class="container my-3">
    <h4 class="mx-5 mb-5">{{ header }}</h4>
    <base-article
      class="my-2"
      v-for="text in texts"
      :key="text.id"
      :nameRu="text.nameRu"
      :url="text.url"
      :leadRu="text.leadRu"
      :img="text.img"
    ></base-article>
  </div>
</template>

<script setup>
import BaseArticle from "./BaseArticle.vue";
import data from "../articles.json";
const texts = data;
import { inject, computed } from "vue";
const uitext = inject("uitext");
const lang = inject("lang");
const header = computed(() => {
  return uitext.articlesHeader[lang.value];
});
</script>

<style></style>
