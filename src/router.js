import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import ArticlePage from "./components/ArticlePage.vue";
import ProjectsPage from "./components/ProjectsPage.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/ru", meta: { lang: "ru" } },
    { path: "/ru", component: HomePage, meta: { lang: "ru" } },
    { path: "/en", component: HomePage, meta: { lang: "en" } },

    { path: "/articles", redirect: "/ru/articles", meta: { lang: "en" } },
    { path: "/ru/articles", component: ArticlePage, meta: { lang: "ru" } },
    { path: "/en/articles", component: ArticlePage, meta: { lang: "en" } },

    { path: "/projects", redirect: "/ru/projects", meta: { lang: "en" } },
    { path: "/ru/projects", component: ProjectsPage, meta: { lang: "ru" } },
    { path: "/en/projects", component: ProjectsPage, meta: { lang: "en" } },

    {
      path: "/ru/cv",
      redirect: () => (window.location.href = "/strunnikov_webdev_cv_ru.pdf"),
    },
    {
      path: "/en/cv",
      redirect: () => (window.location.href = "/strunnikov_webdev_cv.pdf"),
    },
    {
      path: "/Strunnikov_webdev_cv_ru.pdf",
      redirect: () => (window.location.href = "/strunnikov_webdev_cv_ru.pdf"),
    },
    {
      path: "/Strunnikov_webdev_cv",
      redirect: () => (window.location.href = "/strunnikov_webdev_cv.pdf"),
    },

    { path: "/404", component: NotFound, meta: { lang: "ru" } },

    { path: "/:catchAll(.*)", redirect: "/404" },
  ],
});

export default router;
