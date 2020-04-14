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
                   <div class="card-header text-center text-danger">EL correo o la contraseña ingresados son erroneos.</div>
                <div class="card-header text-center">Iniciar Sesión</div>
                <div class="card-body">
                  <a
                    type="button"
                    class="btn btn-primary btn-block"
                    href="http://localhost:3000/auth/facebook/signin"
                  >
                    <img
                      src="../imagenes/icons8-facebook.svg"
                      alt
                      width="30"
                      height="30"
                    />
                    Iniciar Sesion con facebook
                  </a>
                  <form
                    class="form-group mt-3"
                    action="http://localhost:3000/signin"
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
                        v-model.lazy="$v.username.$model"
                      />
                    <p class="text-danger" v-if="!$v.username.required" > el campo de nombres es requerido </p>
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
                    <p  class="text-danger" v-if="!$v.correo.email">Este email es incorrecto </p>
                    <p class="text-danger" v-if="!$v.correo.required"> este campo es requerido</p>
                    </div>
                    
                    <div class="form-group">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        placeholder="Contraseña"
                        v-model.lazy="$v.password.$model"
                        
                      />
                      <p class="text-danger" v-if="!$v.password.required"> este campo es requerido.</p>
                       <p v-if="!$v.password.minLength" class="text-danger">minimo 6 caracteres</p>
                    </div>
                   
                    <input type="file" class="d-none" ref="boton" />
                    <button
                      type="submit"
                      class="btn color-boton btn-block text-white"
                       :disabled="$v.$invalid"
                    >
                      Iniciar Sesion
                    </button>
                  </form>
                  <router-link to="/registro-local">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-block"
                    >
                      Registrarse
                    </button>
                  </router-link>
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
import { required, email,  minLength } from "vuelidate/lib/validators";
export default {
  name: "Crear-usuario",
  data() {
    return {
      password: "",
      passwordConfirm:"",
      username: "",
      correo: "",
      campo:""
    };
  },
  validations: {
    username:{required},
    correo: { required, email },
    password: { required, minLength: minLength(6) },
     
      
  }
};
</script>

<style>
.color-boton {
  background-color: #22163c;
}
</style>
