import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: () => import("@/views/HomeView.vue")
  //   },
  //   {
  //     path: '/projects',
  //     name: 'projects',
  //     component: () => import("@/views/ProjectsView.vue")
  //   },
  //   {
  //     path: '/projects/:id',
  //     name: 'single projects',
  //     component: () => import("@/views/SingleProjectView.vue")
  //   },
  //   {
  //     path: '/:catchAll(.*)*',
  //     name: '404'
  //
  //   }
  // ],
})

export default router
