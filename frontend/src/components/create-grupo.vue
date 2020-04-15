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
                  class="btn btn-outline-primary btn-block"
                  data-target="#exampleModal"
                  data-toggle="modal"
                >Crear Grupo</button>
              </div>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="form-group">
                      <p class="text-center">Nombre de grupo o familia</p>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputfamilia"
                        placeholder="ej. Familia Hernandez"
                        v-model="nombreGrupo"
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn color-boton text-white"
                      data-dismiss="modal"
                    >Cerrar</button>
                    <button type="button" class="btn color-boton text-white" @click="crearGrupo()">Cerrar Grupo</button>
                  </div>
                </div>
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
export default {
  data() {
    return {
      nombreGrupo: ""
    };
  },
  methods: {
    crearGrupo() {
      let data = {
        "nombreGrupo": this.nombreGrupo,
        "idCreador": sessionStorage.getItem("id"),
        "fechaCreacionGrupo": new Date().toISOString(),
      }
      fetch("http://localhost:3000/createGrupo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
    }
  }
};
</script>

<style>
.color-boton {
  background-color: #1d0a43;
}
</style>