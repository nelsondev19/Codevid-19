<template>
  <div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
            <br />
            <div class="card">
              <div class="card-header text-center">Bienvenido</div>
              <div class="card-body">
                <img
                  src="../imagenes/grupo.svg"
                  class="card-img"
                  alt="..."
                  height="300"
                  width="300"
                />
                <p
                  class="card-text text-center"
                >Todavia no tienes un grupo creado o un familiar no te ingreso a un grupo</p>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-block"
                  @click="mostrarForm = false"
                  v-if="mostrarForm"
                >Cancelar</button>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-block"
                  @click="mostrarForm = true"
                  v-else
                >Crear Grupo</button>
                <form v-show="mostrarForm" @submit.prevent="crearGrupo()">
                  <div class="form-group">
                    <p class="text-center">Nombre de grupo o familia</p>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Ejem. Familia Hernandez"
                      v-model="nombreGrupo"
                      
                    />
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Crear</button>
                </form>
              </div>
            </div>
            <br />
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  data() {
    return {
      nombreGrupo: "",
      mostrarForm: false
    };
  },
  methods: {
    mostrarNotificacion() {
      this.$toast.open({
        message: `Se guardo correctamente`,
        type: "success",
        duration: 3000,
        dismissible: true
      });
    },
    crearGrupo() {
      sessionStorage.setItem('idGrupo', sessionStorage.getItem("id"))
      let data = {
        nombreGrupo: this.nombreGrupo,
        idCreador: sessionStorage.getItem("id"),
        fechaCreacionGrupo: new Date().toISOString()
      };
      fetch("http://localhost:3000/createGrupo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then( () => {
          this.mostrarNotificacion()// mostrar notificacion al guardarse
          router.push({name:'seleccion'})
        });
    }
  }
};
</script>

<style>
.color-boton {
  background-color: #1d0a43;
}
</style>