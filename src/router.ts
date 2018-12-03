import Vue from 'vue';
import Router from 'vue-router';
const About = () => import('./views/About.vue');
const Blog = () => import('./views/Blog.vue');
const Contact = () => import('./views/Contact.vue');
const Portfolio = () => import('./views/Portfolio.vue');
const Services = () => import('./views/Services.vue');
const Team = () => import('./views/Team.vue');

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
