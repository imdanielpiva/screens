import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: "/projects"
    },
    {
      path: "/projects",
      name: "Projects",
      component: () =>
        import(/* webpackChunckName: "projects" */ "./views/Projects.vue")
    },
    {
      path: "/storyboards",
      name: "Storyboards",
      component: () =>
        import(/* webpackChunckName: "Storyboards" */ "./views/Projects/Storyboards.vue")
    }
  ]
});
