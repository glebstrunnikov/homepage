<template>
  <div class="min-vh-100 d-flex flex-column">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer class="mt-auto"></the-footer>
  </div>
</template>

<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import { provide } from "vue";
import { useRoute } from "vue-router";
import data from "./uitext";
provide("uitext", data);
const route = useRoute();

import { ref, watch } from "vue";
const lang = ref();
provide("lang", lang);
watch(
  () => route.meta.lang,
  (newLang) => {
    lang.value = newLang;
  }
);
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, sans-serif;
}
</style>
