import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import  {mapState} from 'vuex'
Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio/:idUser',
    name: 'Home',
    component: Inicio 
  },
  {
    path: '/buscar/:id',
    name: 'Buscar',
    component: () => import( '../views/Buscar.vue')
  },{
    path: '/notificaciones/:id',
    name: 'Notificaciones',
  
    component: () => import('../views/Notificaciones.vue')
  },{
    path: '/',
    name: 'Login',
    hidden: true, // esto sirve para no mostrar lo que hay 
    component: () => import('../views/Login.vue')
  },{
    path: '/login-err',
    name: 'Login-err',
    hidden: true, // esto sirve para no mostrar lo que hay 
    component: () => import('../views/Login-err.vue')
  },
  {
    path: '/perfil/:id',
    name: 'Perfil',
    component: () => import('../components/profile.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../components/logout.vue')
  },
  {
    path: '/registro-local',
    name: 'local',
    hidden: true, // esto sirve para no mostrar lo que hay 
    component: () => import('../components/registro-local.vue')
  },
  {
    path: '/registro-local/err',
    name: 'Registro-local-err',
    hidden: true, // esto sirve para no mostrar lo que hay 
    component: () => import('../components/Registro-local-err.vue')
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
