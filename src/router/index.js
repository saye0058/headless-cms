import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ReviewsList from '../components/ReviewsList.vue';
import ReviewDetails from "../components/ReviewDetails.vue"

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/reviews',
    component: ReviewsList,
    props: true
  },
  {
    path: '/review/:id',
    component: ReviewDetails,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;