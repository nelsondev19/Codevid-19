import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Inicio
  },
  {
    path: '/buscar',
    name: 'Buscar',
    component: () => import( '../views/Buscar.vue')
  },{
    path: '/notificaciones',
    name: 'Notificaciones',
  
    component: () => import('../views/Notificaciones.vue')
  },{
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
