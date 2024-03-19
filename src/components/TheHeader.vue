<template>
  <nav class="navbar p-0">
    <div class="container-fluid m-0 p-0">
      <div class="container-fluid p-0">
        <div class="ms-auto me-5 overflow-visible float-end">
          <img
            class="portrait img-fluid d-none d-md-block"
            src="../../public/pics/portrait.png"
            alt=""
          />
        </div>

        <div class="container-fluid bg-info-subtle px-5 pt-3 pb-2">
          <span class="navbar-brand mb-0 h1">{{ uitext.topLabel[lang] }}</span>
          <span class="ms-auto me-3 float-end"
            ><button @click="changeLang('ru')" class="btn btn-secondary btn-sm">
              rus
            </button>
            /
            <button @click="changeLang('en')" class="btn btn-secondary btn-sm">
              eng
            </button></span
          >
          <div class="pt-2 mb-auto">
            <router-link
              to="/"
              type="button"
              class="btn mx-2 my-2 btn-outline-dark"
              >{{ uitext.homeBtn[lang] }}</router-link
            >

            <router-link
              to="/ru/projects"
              type="button"
              class="btn mx-2 my-2 btn-outline-dark"
              >{{ uitext.projectsBtn[lang] }}</router-link
            >

            <router-link
              to="/ru/articles"
              type="button"
              class="btn mx-2 my-2 btn-outline-dark"
              >{{ uitext.articlesBtn[lang] }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { inject } from "vue";
const uitext = inject("uitext");
const lang = inject("lang");
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
function changeLang(lang) {
  let destination = route.path;
  if (destination.slice(-1) === "/") {
    destination = destination.slice(0, destination.length - 1);
  }
  destination = destination.slice(3);
  destination = "/" + lang + destination;
  router.push(destination);
}
</script>

<style scoped>
.navbar {
  box-sizing: content-box;
}
img {
  max-width: 180px;
}
</style>
