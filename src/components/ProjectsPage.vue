<template>
  <div class="container my-3">
    <h4 class="mx-5 mb-5">{{ header }}</h4>
    <base-project
      v-for="project in projects"
      :key="project.id"
      :name-ru="project.nameRu"
      :nameEn="project.nameEn"
      :descriptionRu="project.descriptionRu"
      :descriptionEn="project.descriptionEn"
      :link="project.link"
      :github="project.github ? project.github : null"
    ></base-project>
  </div>
</template>

<script setup>
import projects from "../projects.json";
import BaseProject from "./BaseProject.vue";
</script>
