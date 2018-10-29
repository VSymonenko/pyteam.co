import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Blog from './views/Blog.vue';
import Contact from './views/Contact.vue';
import Portfolio from './views/Portfolio.vue';
import Services from './views/Services.vue';
import Team from './views/Team.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: About,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '*', redirect: '/',
    },
  ],
});
