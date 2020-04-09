<template>
  <div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <br />
            <br />
            <div class="card border-0">
              <div class="card-header text-center">Bienvenido</div>
              <div class="card-body">
                <a
                  type="button"
                  class="btn btn-primary btn-block"
                  href="http://localhost:3000/auth/facebook/signin"
                >
                  <img src="../imagenes/icons8-facebook.svg" alt width="30" height="30" />
                  Iniciar Sesion con facebook
                </a>
                <form>
                  <div class="form-group">
                    <p class="text-center">Correo</p>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" class="btn btn-success btn-block">Iniciar Sesion</button>
                </form>

                <p class="text-center">¿Aún no tienes cuenta en COVID-19?</p>
                <router-link to="/registro-local">
                  <button type="button" class="btn btn-outline-primary btn-block">Registrarse</button>
                </router-link>
                <br />
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
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      emial: "",
      password: "",
      correo:"",
      image: ""
    };
  },
  methods: {
    GuardarUserLocal() {
      axios.post('http://localhost:3000/signup',{
        email:this.email,
        password:this.password,
        correo:this.correo
      })
    }
  }
};
</script>