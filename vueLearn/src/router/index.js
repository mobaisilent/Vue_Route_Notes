  import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
  import Home from '../views/Home.vue'
  import NotFound from '@/views/NotFound.vue';

  const routes = [
    { path: '/', component: Home },
    { path: '/egg/:eggType', component:()=> import('../views/Eggs.vue') },
    {path:'/egg',redirect:'/egg/chicken-egg'},
    { path: '/:pathMatch(.*)*', component:()=> import('../views/NotFound.vue') },
  ];

  const router = createRouter(
    {
      history: createWebHistory(),
      routes,
      linkActiveClass: 'egg-active'
    }
  )
  export default router