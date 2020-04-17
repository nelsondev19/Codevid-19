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

                    
                    

                    <button
                      type="submit"
                      class="btn btn-outline-primary btn-block mt-3"
                      :disabled="$v.$invalid"
                    >Crear Cuenta</button>
                    <router-link to="/">
                      <a
                        class="btn-block mt-3 text-center"
                      >¿Ya tienes una cuenta? , aca puedes iniciar sesión</a>
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
import axios from 'axios'
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import PulseLoader from "vue-spinner/src/PulseLoader";
export default {
  name: "Crear-usuario",
  components: {
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
      cloudimage: null,
      cargar: false,
      CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dvakdmdxl/image/upload",
      CLOUDINARY_UPLOAD_PRESET: "larhns0r"
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
  
  }
};
</script>
