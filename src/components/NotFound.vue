<template>
  <div class="d-flex justify-content-center mb-4 mt-2">
    <img src="../../public/pics/404.jpg" alt="" />
  </div>
  <div class="text-center m-5">
    <h4>
      Вы попали на страницу, которой не существует. Если хотите, вернитесь на
      <router-link to="/">главную</router-link>
    </h4>
    <h4>
      You're on a page that doesn't exist. Return to the
      <router-link to="/">main page</router-link> if you want
    </h4>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  max-width: 15%;
  display: block;
}
h4 {
  display: block;
}
</style>
