import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ReviewsList from '../components/ReviewsList.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/reviews',
    component: ReviewsList,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;