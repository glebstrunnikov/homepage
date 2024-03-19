import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "./router.js";
// import grabity from "grabity";

// (async () => {
//   let it = await grabity.grabIt("https://github.com/e-oj/grabity");

//   console.log(it);
// })();

const app = createApp(App);
app.use(router);
app.mount("#app");
