<template>
  <div @click="redirect()" class="card m-2 p-3 overflow-hidden">
    <div class="container">
      <H4>{{ projectData.name }}</H4>
      <span class="m-1" v-if="props.link"
        ><a :href="props.link">{{ lang === "ru" ? "ссылка" : "link" }}</a></span
      >
      <span class="m-1" v-if="props.github"
        ><a :href="props.github">{{
          lang === "ru" ? "страница на github" : "github page"
        }}</a></span
      >
      <div>{{ projectData.description }}</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch, computed } from "vue";
const props = defineProps([
  "nameRu",
  "nameEn",
  "descriptionRu",
  "descriptionEn",
  "link",
  "github",
]);
import { useRoute } from "vue-router";
const route = useRoute();
const lang = computed(() => {
  return route.meta.lang;
});

function redirect() {
  window.location.replace(props.link);
}
const projectData = reactive({
  name: route.meta.lang === "ru" ? props.nameRu : props.nameEn,
  description:
    route.meta.lang === "ru" ? props.descriptionRu : props.descriptionEn,
  link: props.link,
  github: props.github,
});

watch(
  () => route.meta.lang,
  (newLang) => {
    if (newLang === "ru") {
      projectData.name = props.nameRu;
      projectData.description = props.descriptionRu;
    }
    if (newLang === "en") {
      projectData.name = props.nameEn;
      projectData.description = props.descriptionEn;
    }
  }
);
</script>

<style scoped>
a {
  color: gray;
}
.card {
  max-height: 13em;
  max-width: 80%;
}
.card:hover {
  cursor: pointer;
}
</style>
