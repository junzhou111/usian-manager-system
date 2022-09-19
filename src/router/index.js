import Vue from 'vue'
import VueRouter, { RouterLink, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',  
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, form, next) => {
  if (to.path === "/login") return next()
  const tokenStr =window.localStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
  
})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
