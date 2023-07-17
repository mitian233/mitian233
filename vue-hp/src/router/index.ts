import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/gcm',
    name: '我的号码',
    component: () => import('../views/GekiChuMai.vue'),
    meta: {keepAlive: false,noCache: true}
  },
  {
    path: '/:pathMatch(.*)',
    name: 'fnf',
    component: () => import('../views/NotFoundView.vue'),
    meta: {keepAlive: false,noCache: true}
  },
  {
    path: '/link',
    name:'Links',
    component: () => import('../views/linkView.vue'),
    meta: {keepAlive: false,noCache: true}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
