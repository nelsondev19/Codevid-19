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

      <nav class="navbar navbar-expand-lg navbar-light bg-primary no-mostrar-mobile" v-show="this.id">
        <div class="collapse navbar-collapse" id="navbarNav">
          <router-link class="navbar-brand text-white" to="/">COVID-19</router-link>
          <ul class="navbar-nav ml-auto row justify-content-between">
            <div @click="classhome" class="mt-1" >
              <router-link 
                class="nav-link"
                :class="{'text-white':home , 'text-dark':!home }"
                :to="/inicio/ + this.id"
              >Inicio</router-link>
            </div> 
            <div @click="classnotificaciones" class="mt-1">
              <router-link
                class="nav-link"
                :class="{'text-white':notificacion , 'text-dark':!notificacion }"
                to="/notificaciones"
              >
                <i
                  class="material-icons"
                  :class="{'text-white':notificacion , 'text-dark':!notificacion }"
                  @click="classnotificaciones"
                >notifications</i>
              </router-link>
            </div>
            <div @click="classSearch" class="mt-1">
              <router-link
                class="nav-link"
                :class="{'text-white':search, 'text-dark':!search}"
                :to="/buscar/ + this.id"
              >Buscar Personas</router-link>
            </div>
            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span 
                  class="mr-2 d-none d-lg-inline"
                  :class="{'text-white':person , 'text-dark':!person}"
                >{{ nombreUser }}</span>
                <img
                  class="img-profile rounded-circle"
                  :src="image"
                />
              </a>
              <!-- Dropdown - User Information -->
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <div @click="classperson">
                  <router-link class="dropdown-item" :to="/perfil/+this.id">Usuario</router-link>
                </div>
                <div @click="DeleteIdUser()">
                  <a href="http://localhost:3000/logout" style="text-decoration:none">Cerrar Sesion</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div class="footer mt-auto py-2 fixed-bottom mostrar bg-light"  v-show="this.navbar">
        <div class="container" v-show="this.navbar" >
          <div class="row" v-show="this.navbar">
            <div class="col mr-1 ml-3" :class="{'bg-primary menu-borde': home }" @click="classhome">
              <router-link :to="/inicio/ + this.id">
                <i
                  class="material-icons md-28"
                  :class="{'text-white':home , 'text-dark':!home }"
                >home</i>
              </router-link>
            </div>
            <div class="col mr-2" :class="{'bg-primary menu-borde':search}" @click="classSearch">
              <router-link :to="/buscar/ + this.id">
                <i
                  class="material-icons md-28"
                  :class="{'text-white':search, 'text-dark':!search}"
                >search</i>
              </router-link>
            </div>
            <div class="col mr-2" :class="{'bg-primary menu-borde':person}" @click="classperson">
              <router-link :to="/perfil/ + this.id">
                <i
                  class="material-icons md-28"
                  :class="{'text-white':person , 'text-dark':!person}"
                >person</i>
              </router-link>
            </div>
            <div
              class="col ml-2"
              :class="{'bg-primary menu-borde':notificacion}"
              @click="classnotificaciones"
            >
              <router-link :to="/notificaciones/ + this.id">
                <i
                  class="material-icons md-28"
                  :class="{'text-white':notificacion , 'text-dark':!notificacion}"
                >notifications</i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>


<script>
import router from "./router";
import { mapState, mapActions } from "vuex";
export default {
  mounted() {
    setTimeout(() => {
      this.id = sessionStorage.getItem("id");
      this.image = sessionStorage.getItem('imagen')
      this.nombreUser = sessionStorage.getItem('nombre')
    }, 1500);
  },
  name: "app",
  data() {
    return {
      home: true,
      search: false,
      person: false,
      notificacion: false,
      person: false,
      user: [],
      id: "",
      image:"",
      nombreUser:""
     
    };
  },
  computed: {
    ...mapState(["navbar"])
  },
  methods: {
    classhome() {
      this.home = true;
      this.search = false;
      this.person = false;
      this.notificacion = false; 
      this.person = false;
    },
    classSearch() {
      this.home = false;
      this.search = true;
      this.person = false;
      this.notificacion = false;
      this.person = false;
    },
    classperson() {
      this.home = false;
      this.search = false;
      this.person = true;
      this.notificacion = false;
      this.person = false;
    },
    classnotificaciones() {
      this.home = false;
      this.search = false;
      this.person = false;
      this.notificacion = true;
      this.person = false;
    },
    classperson() {
      this.home = false;
      this.search = false;
      this.person = false;
      this.notificacion = false;
      this.person = true;
    },
    DeleteIdUser() {
      this.navbar=false
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("nombre");
      sessionStorage.removeItem("imagen");
      router.push({ name: "Login" });
    },
    ...mapActions(["borrarID"])
  }
};
</script>

<style>
.img-profile {
  height: 2rem;
  width: 2rem;
}
</style>
