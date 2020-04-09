<template>
  <div id="app">
    <div>
      <!-- Esto se vera en pantalla de movil -->
      <div class="mostrar">
        <ul class="nav justify-content-center bg-dark">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/inicio">COVID-19</router-link>
          </li>
        </ul>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-primary no-mostrar-mobile">
        <div class="collapse navbar-collapse" id="navbarNav">
          <router-link class="navbar-brand text-white" to="/inicio">COVID-19</router-link>
          <ul class="navbar-nav ml-auto  row justify-content-between">
          <div  @click="classhome" class="mt-1">
            <router-link class="nav-link " :class="{'text-white':home , 'text-dark':!home }" to="/inicio">Inicio</router-link>
           </div> 
           <div @click="classnotificaciones" class="mt-1">
            <router-link class="nav-link "  :class="{'text-white':notificacion , 'text-dark':!notificacion }"    to="/notificaciones">
              <i class="material-icons "  :class="{'text-white':notificacion , 'text-dark':!notificacion }"   @click="classnotificaciones" >notifications</i>
            </router-link>
             </div>
             <div  @click="classSearch" class="mt-1">
            <router-link class="nav-link " :class="{'text-white':search, 'text-dark':!search}" to="/buscar">Buscar Personas</router-link>
            </div>
<!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow ">
              <a class="nav-link dropdown-toggle text-white" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Nelson Hernandez</span>
                <img class="img-profile rounded-circle" src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <router-link class="dropdown-item" :class="{'text-white':person , 'text-dark':!person}" :to='/perfil/+this.usuarioid'>Usuario</router-link>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  Cerrar Sesion
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div class="footer mt-auto py-2 fixed-bottom mostrar bg-light">
        <div class="container">
          <div class="row">
            <div class="col mr-1 ml-3 "  :class="{'bg-primary menu-borde': home }" @click="classhome">
              
              <router-link to="/inicio">
                <i class="material-icons md-28" :class="{'text-white':home , 'text-dark':!home }">home</i>
              </router-link>
            </div>
            <div class="col mr-2" :class="{'bg-primary menu-borde':search}" @click="classSearch">
              <router-link to="/buscar">
                <i class="material-icons md-28" :class="{'text-white':search, 'text-dark':!search}">search</i>
              </router-link>
            </div>
            <div class="col mr-2 " :class="{'bg-primary menu-borde':person}" @click="classperson">
              <router-link to="/perfil/2757601134526372">
                <i class="material-icons  md-28" :class="{'text-white':person , 'text-dark':!person}">person</i>
              </router-link>
            </div>
            <div class="col ml-2" :class="{'bg-primary menu-borde':notificacion}" @click="classnotificaciones">
              <router-link to="/notificaciones">
                <i class="material-icons  md-28" :class="{'text-white':notificacion , 'text-dark':!notificacion}">notifications</i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
        <router-view/>
    </div>
  </div>
</template>


<script>
import {mapState} from 'vuex'
export default {
  name:"app",
  data() {
    return {
      home: true,
      search: false,
      person: false,
      notificacion: false
    };
  }, computed: {
    ...mapState(['usuarioid'])
  },
  methods: {
    classhome() {
      this.home = true
      this.search = false
      this.person = false
      this.notificacion = false      
    },
    classSearch() {
      this.home = false
      this.search = true
      this.person = false
      this.notificacion = false
    },
    classperson() {
      this.home = false
      this.search = false
      this.person = true
      this.notificacion = false
    },classnotificaciones() {
      this.home = false
      this.search = false
      this.person = false
      this.notificacion = true
    },
    
  }
};
</script>

<style>
.img-profile {
    height: 2rem;
    width: 2rem;
}
</style>