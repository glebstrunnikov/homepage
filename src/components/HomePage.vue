<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <h1 v-html="uitext.aboutHeader[lang]" class="py-3"></h1>
        <div v-html="uitext.aboutText[lang]" id="about-text" class="fs-5"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
const uitext = inject("uitext");
const lang = inject("lang");
</script>

<style></style>
