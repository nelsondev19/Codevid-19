import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
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
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/perfil/:id',
    name: 'Perfil',
    component: () => import('../components/profile.vue')
  },
  {
    path: '/logout/:id',
    name: 'logout',
    component: () => import('../components/Logout.vue')
  },
  {
    path: '/Crear-usuario',
    name: 'CrearUsuario',
    component: () => import('../components/Crear-usuario.vue')
  },
  {
    path: '/seleccion-person/:id',
    name: 'seleccion',
    component: () => import('../components/seleccion-person.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
