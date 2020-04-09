<template>
  <div id="app">
    <div>
      <!-- Esto se vera en pantalla de movil -->
      <div class="mostrar">
        <ul class="nav justify-content-center bg-dark">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">COVID-19</router-link>
          </li>
        </ul>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-primary no-mostrar-mobile portada" id="portada">
        <div class="collapse navbar-collapse" id="navbarNav">
          <router-link class="navbar-brand text-white" to="/">COVID-19</router-link>
          <ul class="navbar-nav ml-auto  row justify-content-between">
          <div  @click="classhome">
            <router-link class="nav-link " :class="{'text-white':home , 'text-dark':!home }" to="/">Inicio</router-link>
           </div> 
           <div @click="classnotificaciones">
            <router-link class="nav-link "  :class="{'text-white':notificacion , 'text-dark':!notificacion }"    to="/notificaciones">
              <i class="material-icons "  :class="{'text-white':notificacion , 'text-dark':!notificacion }"   @click="classnotificaciones" >notifications</i>
            </router-link>
             </div>
             <div  @click="classSearch">
            <router-link class="nav-link " :class="{'text-white':search, 'text-dark':!search}" to="/buscar">Buscar Personas</router-link>
            </div>
             <div  @click="classSearch">
            <router-link class="nav-link " :class="{'text-white':search, 'text-dark':!search}" to="/contador">contador</router-link>
            </div>
            <div @click="classperson">
            <router-link class="nav-link " :class="{'text-white':person , 'text-dark':!person}"   to="/login">Usuario</router-link>
            </div>
          </ul>
        </div>
      </nav>

      <div class="footer mt-auto py-2 fixed-bottom mostrar bg-light">
        <div class="container">
          <div class="row">
            <div class="col mr-1 ml-3 "  :class="{'bg-primary menu-borde': home }" @click="classhome">
              
              <router-link to="/">
                <i class="material-icons md-28" :class="{'text-white':home , 'text-dark':!home }">home</i>
              </router-link>
            </div>
            <div class="col mr-2" :class="{'bg-primary menu-borde':search}" @click="classSearch">
              <router-link to="/buscar">
                <i class="material-icons md-28" :class="{'text-white':search, 'text-dark':!search}">search</i>
              </router-link>
            </div>
            <div class="col mr-2 " :class="{'bg-primary menu-borde':person}" @click="classperson">
              <router-link :to="{name:'Login'}">
                <i class="material-icons  md-28" :class="{'text-white':person , 'text-dark':!person}">person</i>
              </router-link>
            </div>
            <div class="col ml-2" :class="{'bg-primary menu-borde':notificacion}" @click="classnotificaciones">
              <router-link to="/notificaciones">
                <i class="material-icons  md-28" :class="{'text-white':notificacion , 'text-dark':!notificacion}">notifications</i>
              </router-link>
              <div  @click="classSearch">
            <router-link class="nav-link " :class="{'text-white':search, 'text-dark':!search}" to="/contador">contador</router-link>
            </div>
            </div>
          </div>
        </div>
      </div>
        <router-view/>
    </div>
  </div>
</template>


<script>
export default {
  name:"app",
  data() {
    return {
      home: true,
      search: false,
      person: false,
      notificacion: false
    };
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
