<template>
  <div>
    <!-- pantalla en pc -->
    <div class="no-mostrar-mobile">
      <!-- contenedor dividido en tres partes -->
      <div class="container">
        <div class="row">
          <div class="col"></div>

          <div class="col">
            <div class="input-group mb-3">
              <i class="material-icons mt-2">search</i>
              <input
                type="search"
                class="form-control border-0 borde-redondo"
                placeholder="Buscar Personas"
                v-model="filtroUsuarios"
              />
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>

    <div class="container no-mostrar-mobile">
      <div class="row">
        <div class="col-md-4" v-for="u in BuscarUsuario" :key="u._id">
          <div class="card">
            <div class="card-body">
              <img
                src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY"
                class="avatar"
                alt="..."
              />
              <small class="mt-2">{{ u.firstname }} {{u.last_name}} {{TimeAgo(u.DateCreation)}}</small>
              <div class="d-flex justify-content-center">
                <button class="btn color-boton btn-sm text-white">Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- pantalla en movil -->
    <div class="mostrar">
      <div class="input-group mb-3">
        <i class="material-icons mt-2">search</i>
        <input
          type="search"
          class="form-control border-0 borde-redondo"
          placeholder="Buscar Personas"
          v-model="filtroUsuarios"
        />
      </div>
      <div v-for="u in BuscarUsuario" :key="u._id">
        <ul class="list-unstyled card bg-light">
          <li class="media">
            <img
              :src="u.urlimage"
              class="avatar"
              alt="..."
            />
            <div class="media-body">
              <h6 class="text-dark mt-3">{{ u.firstname }}</h6>
              <h6>{{TimeAgo(u.DateCreation)}}</h6>
              <div class="d-flex justify-content-end mr-1">..</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>
<script>
import { mapState } from "vuex";

import moment from "moment";
export default {
  created() {
    this.ObtenerUsuario();
  },
  data() {
    return {
      usuarios: [],
      filtroUsuarios: ""
    };
  },
  computed: {
    ...mapState(["usuarioid"]),
    BuscarUsuario() {
      return this.usuarios.filter(usuario => {
        return usuario.firstname.includes(this.filtroUsuarios);
      });
    }
  },
  methods: {
    ObtenerUsuario() {
      fetch("http://localhost:3000/getUsers")
        .then(res => res.json())
        .then(data => {
          this.usuarios = data;
          console.log(data);
        })
        .catch(err => console.log(err));
    },
    TimeAgo(fecha) {
      return moment(fecha).format("LL");
    }
  }
};
</script>

<style>
.borde-redondo {
  border-radius: 42px 42px 42px 42px;
  -moz-border-radius: 42px 42px 42px 42px;
  -webkit-border-radius: 42px 42px 42px 42px;
  border: 0px solid #000000;
}

.borde-redondo:hover {
  -webkit-box-shadow: 11px 10px 22px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 11px 10px 22px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 11px 10px 22px -7px rgba(0, 0, 0, 0.75);
}

.color-boton {
  background-color: #1d0a43;
}
</style>
