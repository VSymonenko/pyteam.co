import Vue from 'vue'
import VueRouter from 'vue-router'

const MainContent = () => import('../components/MainContent.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainContent
    },
    {
      path: '*', redirect: '/'
    }
  ]
})

export default router