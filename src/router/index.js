import Vue from 'vue';
import VueRouter from 'vue-router';
import BlogView from '../views/BlogView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: BlogView
  },
  {
    path: '/blog-detail/:id',
    name: 'Blog Detail',
    component: () => import('../views/BlogView/BlogDetail.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
