<template>
  <div>
    <div>
      <div class="container">
        <br />
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <br />
            <br />
            <br />
            <div class="card border-0">
              <div class="card-body text-center">
                 <img
                  :src="usuario.urlimage"
                  alt="Avatar"
                  class="avatar sombreado"
                />
                <br />
                <br />
                {{ usuario }}
                <p class="card-text">{{ usuario.firstname }}</p>
                <p class="card-text">{{ usuario.email }}</p>
      <pacman-loader :loading="cargar"></pacman-loader>
                <div v-if="!cargar">
                  <input type="file" ref="boton" class="d-none" @change="buscarImagen($event)" />
                  <button
                    class="mt-3 btn btn-outline-success btn-block"
                    @click="$refs.boton.click()"
                  >Buscar Imagen</button>
                  <div class="card-header text-center mt-4" v-if="archivo != null">
                    <img class="my-3 mx-3" :src="URLimage" height="300" width="500" />
                    <h3>{{ archivo.name }}</h3>
                    <input name="image" v-model="cloudimage" class="d-none" />
                  </div>
                  <button
                    v-if="archivo!==null"
                    class="mt-3 btn btn-outline-danger btn-block"
                    @click="subirImagen()"
                  >guardar cambios</button>

                  <div class="card-header text-center mt-4" v-if="error != null">
                    <h3>{{ error }}</h3>
                  </div>
                </div>

                <button
                  type="button"
                  class="btn bg-primary btn-block text-white mt-4"
                  @click="quitNavbar(false)"
                >Cerrar Sesión</button>
              </div>
            </div>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vuex from "vuex";
import { mapActions, mapState } from "vuex";
import router from "../router";
import createGrupo from "@/components/create-grupo.vue";
import PulseLoader from "vue-spinner/src/PulseLoader";
import PacmanLoader from 'vue-spinner/src/PacmanLoader'
import axios from 'axios'
export default {
  async created() {
    await this.OneUser();
  },
  mounted() {
    this.putNavbar(true);
    sessionStorage.setItem("id", this.$route.params.id);
    const id = sessionStorage.getItem("id");
    console.log("mi id es ", id);

    setTimeout(() => {
      let apellido = this.usuario.last_name;
      if (apellido == undefined) {
        apellido = "";
      }
      
      sessionStorage.setItem('imagen', this.usuario.urlimage)
      sessionStorage.setItem('nombre',this.usuario.firstname + " " + apellido);
    }, 1000);
  },
  data() {
    return {
      usuario: [],
      error: "",
      archivo: null,
      URLimage: "",
      cloudimage: null,
      cargar: false,
      CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dvakdmdxl/image/upload",
      CLOUDINARY_UPLOAD_PRESET: "larhns0r"
    };
  },
  methods: {
    ...mapActions(["getId", "borrarID", "getName", "putNavbar", "quitNavbar"]),
    OneUser() {
      fetch("http://localhost:3000/oneUser/" + this.$route.params.id)
        .then(res => res.json())
        .then(data => (this.usuario = data))
        .catch(err => {
          if (err) {
            // si nos da error significa que no existe el id que le pasamos en la base de datos
            router.push({ name: "Login" });
          }
        });
     
    },
    cerrarSesion() {
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("nombre");
      sessionStorage.removeItem("imagen");
      router.push({ name: "Login" });
    },
    async buscarImagen(event) {
      console.log(event.target.files[0]);
      const tipoDeArchivo = event.target.files[0].type;
      if (
        tipoDeArchivo === "image/jpeg" ||
        tipoDeArchivo === "image/jpg" ||
        tipoDeArchivo === "image/npg" ||
        tipoDeArchivo === "image/png"
      ) {
        this.error = null;
        this.archivo = event.target.files[0];
      } else {
        this.archivo = null;
        this.error = "archivo no valido";
      }
      const reader = new FileReader();
      reader.readAsDataURL(this.archivo);
      reader.onload = e => {
        e.preventDefault();
        console.log(e.target.result);
        this.URLimage = e.target.result;
      };
    },
    subirImagen() {
      this.cargar = true;
      let formData = new FormData();
      formData.append("file", this.archivo); // le damos los datos de la imagen luego que se lleno en la funcion processFile()
      formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET); // le damos nuestro preset

      //subiendo imagen con fetch
      fetch(this.CLOUDINARY_URL, { method: "POST", body: formData })
        .then(response => response.json()) //convertimos la respuesta en json
        .then(data => {
          console.log(data.url);
          this.cloudimage = data.url;
          this.actualizarFoto()
          this.archivo =null
          this.cargar = false;
        }) // obtenemos la url de la imagen guardada
        .catch(error => console.log("ocurrio un error ", error)); //capturamos un posible error
    },
      actualizarFoto(){
      axios.put('http://localhost:3000/changePhoto',{
        image:this.cloudimage,
        id:this.$route.params.id
      })
    }
  },
  computed: {
    ...mapState(["usuarioid"])
  },
  components: {
    PulseLoader,
    PacmanLoader
  }
};
</script>

<style>
.avatar {
  vertical-align: middle;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.bg-encabezado {
  background-color: #110319;
}
</style>
