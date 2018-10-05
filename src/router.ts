import Vue from 'vue';
import Router from 'vue-router';

const MainContent = () => import('./views/MainContent.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainContent,
    },
    {
      path: '*', redirect: '/',
    },
  ],
});
