<template>
  <div>
    <div>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
              <br />
              <div class="card">
                <div class="card-header text-center">Registrarse</div>
                <div class="card-body">
                  <a
                    type="button"
                    class="btn btn-primary btn-block"
                    href="http://localhost:3000/auth/facebook/callback"
                  >
                    <img
                      src="../imagenes/icons8-facebook.svg"
                      alt="resgitro con facebook"
                      width="30"
                      height="30"
                    />
                    Registrarse con facebook
                  </a>
                  <form class="form-group mt-3" action="http://localhost:3000/signup" method="POST">
                    <div class="form-group">
                      <label>Nombres de Usuario</label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        name="username"
                        placeholder="ej.Nelson"
                        v-model="$v.username.$model"
                      />
                      <p
                        class="text-danger"
                        v-if="!$v.username.required"
                      >el campo de nombres es requerido</p>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Correo</label>
                      <input
                        type="email"
                        class="form-control"
                        aria-describedby="emailHelp"
                        name="correo"
                        placeholder="correo"
                        v-model.lazy="$v.correo.$model"
                      />
                      <p class="text-danger" v-if="!$v.correo.email">Este email es incorrecto</p>
                      <p class="text-danger" v-if="!$v.correo.required">este campo es requerido</p>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        placeholder="Contraseña"
                        v-model="$v.password.$model"
                      />
                      <p class="text-danger" v-if="!$v.password.required">este campo es requerido.</p>
                      <p v-if="!$v.password.minLength" class="text-danger">minimo 6 caracteres</p>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Contraseña"
                        v-model="$v.password2.$model"
                      />
                      <p
                        class="text-success"
                        v-if="$v.password2.sameAsPassword && password !==  this.campo"
                      >las contraseñas coindciden</p>
                    </div>
                    <input type="file" ref="boton" class="d-none" @change="buscarImagen($event)" />

  <pulse-loader :loading="cargar"></pulse-loader>
<div v-if="!cargar">
                    <v-btn
                      class="mt-3 btn btn-outline-success btn-block"
                      @click="$refs.boton.click()"
                    >Buscar Imagen</v-btn>
                    <div class="card-header text-center mt-4" v-if="archivo != null">
                      <img class="my-3 mx-3" :src="URLimage" height="300" width="500" />
                      <h3>{{ archivo.name }}</h3>
                      <input name="image" v-model="cloudimage"  class="d-none"/>
                    </div>
                 <v-btn 
                 v-if ="archivo!==null"
                      class="mt-3 btn btn-outline-danger btn-block"
                     @click="subirImagen()"
                    >Subir imagen</v-btn>
            
                    <div class="card-header text-center" v-if="error != null">
                      <h3>{{ error }}</h3>
                    </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-outline-primary btn-block mt-3"
                      :disabled="$v.$invalid  &&  cloudimage !== null"
                         
                    >Crear Cuenta</button>
                    <router-link to="/">
                      <a
                        class="btn-block mt-3 text-center"
                      >¿Ya tienes una cuenta? , aca puedes iniciar sesión</a>
npm install vue-spinner

                    </router-link>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-sm"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import PulseLoader from "vue-spinner/src/PulseLoader";
export default {
  name: "Crear-usuario",
  components:{
    PulseLoader
  },
  data() {
    return {
      password: "",
      username: "",
      correo: "",
      password2: "",
      campo: "",
      error: "",
     
      archivo: null,
      URLimage: "",
    cloudimage:null,
     cargar:false,
      CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dvakdmdxl/image/upload",
      CLOUDINARY_UPLOAD_PRESET: "larhns0r",
    };
  },
  validations: {
    username: { required },
    correo: { required, email },
    password: { required, minLength: minLength(6) },
    password2: { sameAsPassword: sameAs("password") }
  },
  computed: {},
  methods: {
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
    subirImagen(){
      this.cargar = true
      let formData = new FormData();
      formData.append("file", this.archivo); // le damos los datos de la imagen luego que se lleno en la funcion processFile()
      formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET); // le damos nuestro preset
      
      //subiendo imagen con fetch
      fetch(this.CLOUDINARY_URL, { method: "POST", body: formData })
        .then(response => response.json()) //convertimos la respuesta en json
        .then(data =>{ console.log(data.url)
        this.cloudimage = data.url
        this.cargar = false
        }) // obtenemos la url de la imagen guardada
        .catch(error => console.log("ocurrio un error " , error)); //capturamos un posible error
    }
  }
};
</script>
