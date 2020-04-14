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
                <div class="card-header text-center text-danger">El correo que ingreso ya ha sido utilizado</div>  
                <div class="card-header text-center">Registrarse</div>
                <div class="card-body">
                  <a
                    type="button"
                    class="btn btn-primary btn-block"
                    href="http://localhost:3000/auth/facebook/callback"
                  >
                    <img
                      src="../imagenes/icons8-facebook.svg"
                      alt
                      width="30"
                      height="30"
                    />
                    Registrarse con facebook
                  </a>
                  <form
                    class="form-group mt-3"
                    action="http://localhost:3000/signup"
                    method="POST"
                  >
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
                      <p class="text-danger" v-if="!$v.username.required">
                        el campo de nombres es requerido
                      </p>
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
                      <p class="text-danger" v-if="!$v.correo.email">
                        Este email es incorrecto
                      </p>
                      <p class="text-danger" v-if="!$v.correo.required">
                        este campo es requerido
                      </p>
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
                      <p class="text-danger" v-if="!$v.password.required">
                        este campo es requerido.
                      </p>
                      <p v-if="!$v.password.minLength" class="text-danger">
                        minimo 6 caracteres
                      </p>
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
                      >
                        las contraseñas coindciden
                      </p>
                    </div>

                    <input type="file" class="d-none" ref="boton" />
                    <button
                      type="button"
                      class="btn btn-success btn-block"
                      @click="$refs.boton.click()"
                    >
                      Subir imagen
                    </button>
                    <button
                      type="submit"
                      class="btn btn-outline-primary btn-block"
                      :disabled="$v.$invalid"
                    >
                      Crear Cuenta
                    </button>
                     
                       <router-link to="/" class=" btn-block mt-3 text-center">
                   
                     ¿Ya tienes una cuenta? , aca puedes iniciar sesión
                   
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
export default {
  name: "Registro-local-err",
  data() {
    return {
      password: "",
      username: "",
      correo: "",
      password2: "",
      campo:""
    };
  },
  validations: {
    username: { required },
    correo: { required, email },
    password: { required, minLength: minLength(6) },
    password2: { sameAsPassword: sameAs("password") }
  },
  computed: {
  
  },
};
</script>
