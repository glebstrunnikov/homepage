<template>
  <footer id="footer" class="px-5 pb-2 pt-3 bg-secondary bg-gradient">
    <div class="row py-1">
      <div
        id="copyright-text"
        class="col-md-2 ms-5 ps-5 copyright"
        style="font-size: 90%"
      ></div>
      <div class="col ps-md-3 ms-md-3 pt-md-0 ps-5 ms-5 pt-2 accounts">
        <a href="https://github.com/glebstrunnikov"><p>GitHub</p></a>
        <a href="https://www.facebook.com/gleb.strunnikov/"><p>Facebook</p></a>
        <a href="https://twitter.com/glebstrunnikov"><p>Twitter</p></a>
        <a href="https://t.me/glebstrunnikov"><p>Telegram</p></a>
        <a href="mailto:glebstrunnikov@gmail.com"><p>Email</p></a>
        <a :href="cvLink"><p>CV</p></a>
        <p></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, watch, inject } from "vue";
const uitext = inject("uitext");
import { useRoute } from "vue-router";
const route = useRoute();
const lang = ref();
const copyrightText = ref();
const cvLink = ref();
watch(
  () => route.meta.lang,
  (newLang) => {
    lang.value = newLang;
    newLang === "en"
      ? (cvLink.value = "/Strunnikov_webdev_cv.pdf")
      : (cvLink.value = "/Strunnikov_webdev_cv_ru.pdf");
    copyrightText.value = uitext.copyrightText[lang.value];
    document.querySelector("#copyright-text").innerHTML = copyrightText.value;
  }
);
</script>

<style scoped lang="sass">
a
  color: black
a:hover
  color: rgb(75, 37, 37)
p
  margin-bottom: 0
  font-size: 90%
</style>
/* p { margin-bottom: 0; font-size: 90%; } a { color: black; } a:hover { color:
rgb(75, 37, 37); } */
