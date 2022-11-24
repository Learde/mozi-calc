import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuadraticEquationFirst from "../views/QuadraticEquationFirst.vue";
import QuadraticEquationSecond from "../views/QuadraticEquationSecond.vue";
import ProtoplasticRoots from "../views/ProtoplasticRoots.vue";
import Yakobi from "../views/Yakobi.vue";

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
    },
    {
      path: '/protoplastic',
      name: 'protoplastic',
      component: ProtoplasticRoots,
    },
    {
      path: '/yakobi',
      name: 'yakobi',
      component: Yakobi,
    }
  ]
})

export default router
