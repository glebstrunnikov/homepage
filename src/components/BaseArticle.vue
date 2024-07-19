<template>
  <div @click="redirect(url)" class="card p-0 overflow-hidden">
    <div class="card-wrapper">
      <div
        style="box-sizing: border-box; display: flex; justify-content: center"
        class="img-wrapper overflow-hidden"
      >
        <img
          class="d-none d-lg-block mw-100"
          :src="cardData.img"
          alt="/pics/blank.jpg"
        />
        <img
          class="image-medium d-md-block d-lg-none"
          :src="cardData.img"
          alt="/pics/blank.jpg"
        />
      </div>
      <div class="text-wrapper">
        <h5 class="card-title pt-3">{{ cardData.name }}</h5>
        <a :href="url" class="fs-6">{{ cardData.url }}</a>
        <p class="text-content fs-6 mb-0">
          {{ cardData.lead }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.card-wrapper
  display: flex
.img-wrapper
  flex: 1
.text-wrapper
  flex: 2
  padding: 10px
.text-content
  text-overflow: ellipsis
  overflow: hidden
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 5
</style>

<script setup>
import { ref, onMounted, reactive } from "vue";
const props = defineProps(["nameRu", "url", "leadRu", "img"]);

function redirect(url) {
  window.location.replace(url);
}
const cardData = reactive({
  name: props.nameRu,
  url: getDomain(props.url),
  lead: props.leadRu,
  // props.leadRu.length < 280
  //   ? props.leadRu
  //   : `${props.leadRu.slice(0, 280)}...`,
  img: props.img,
});

function getDomain(url) {
  let reDomain = /.*?\/\//g;
  let newUrl = url;
  newUrl = newUrl.replaceAll(reDomain, "");
  reDomain = /\/.*/g;
  newUrl = newUrl.replaceAll(reDomain, "");
  return newUrl;
}
const domain = ref();
domain.value = getDomain(props.url);

onMounted(() => {
  function fetchImage(url) {
    fetch(url, { method: "GET", mode: "cors", cache: "default" })
      .then((res) => res.text())
      .then((res) => {
        const dummy = document.createElement("html");
        dummy.innerHTML = res;
        const resName = dummy.querySelector('[property="og:title"]')
          ? dummy.querySelector('[property="og:title"]')
          : dummy.querySelector('[name="og:title"]');
        if (!cardData.name) {
          cardData.name = resName.content;
        }
        const resDescription = dummy.querySelector(
          '[property="og:description"]'
        )
          ? dummy.querySelector('[property="og:description"]')
          : dummy.querySelector('[name="og:description"]');
        if (!cardData.lead) {
          cardData.lead = resDescription.content;
        }
        const resImage = dummy.querySelector('[property="og:image"]')
          ? dummy.querySelector('[property="og:image"]')
          : dummy.querySelector('[name="og:image"]');
        if (!cardData.img) {
          cardData.img = resImage.content;
        }
      });
  }
  if (!cardData.name || !cardData.url || !cardData.lead || !cardData.img) {
    fetchImage("https://cors-anywhere.herokuapp.com/" + props.url);
  }
});
</script>

<style scoped>
a {
  color: gray;
}
.card {
  max-height: 13em;
}
.card:hover {
  cursor: pointer;
}
img.image-medium {
  max-height: 13em;
}
</style>
