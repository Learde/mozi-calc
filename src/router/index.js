import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuadraticEquationFirst from "../views/QuadraticEquationFirst.vue";
import QuadraticEquationSecond from "../views/QuadraticEquationSecond.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quadratic1',
      name: 'quadratic1',
      component: QuadraticEquationFirst,
    },
    {
      path: '/quadratic2',
      name: 'quadratic2',
      component: QuadraticEquationSecond,
    }
  ]
})

export default router
