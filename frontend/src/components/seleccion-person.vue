<template>
  <div>
    <div class="no-mostrar-mobile">
      <div class="row">
        <div class="col-4">
          <div
            class="card color-card"
            v-for="element in family.creador"
            :key="element._id"
          >
            <div class="card-body">
              <p class="font-weight-bold">
                <img
                  :src="element.urlimage"
                  alt="Avatar"
                  class="avatar sombreado"
                />
                {{ element.firstname }}
              </p>

              <input
                type="search"
                class="form-control border-0 borde-redondo"
                placeholder="Buscar Personas"
              />
            </div>
          </div>
          <div
            v-for="element in family.familiares"
            :key="element._id"
            @click="
              agregarPersona(
                element.firstname,
                element._id,
                element.email,
                element.idGrupo
              )
            "
          >
            <ul class="list-unstyled card color-hover">
              <li class="media">
                <img
                  :src="element.urlimage"
                  alt="Avatar"
                  class="avatar sombreado"
                />
                <div class="media-body">
                  <h6 class="text-dark mt-3">{{ element.firstname }}</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-8">
          <div class="card border-0">
            <div
              class="card-body text-center"
              v-show="asignar == false && elegido == false"
            >
              <!-- //elegido es de la base de datos , asignar es de la data  -->
              <img
                src="../imagenes/select-user.png"
                alt="seleccion de perfil"
                height="380"
                width="530"
              />
              <p class="font-weight-bolder">
                Selecciona un familiar para luego generar un permiso de salida
              </p>
            </div>
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <div class="card mr-2 ml-4" v-show="asignar && elegido == false">
              <div class="card-body text-center">
                <p class="font-weight-bolder">{{ listAsignado[0].name }}</p>
                <p>{{ listAsignado[0].email }}</p>
                <button
                  class="btn btn-primary"
                  @click="
                    AsignarUsuario(listAsignado[0].id, listAsignado[0].idGrupo)
                  "
                >
                  Asignar
                </button>
              </div>
            </div>
            <div class="card mr-2 ml-4" v-if="elegido">
              <div class="card-body text-center">
                <p class="font-weight-bolder">{{ asignado.firstname }}</p>
                <p>{{ asignado.email }}</p>
                <p>id del grupo : {{ asignado.idGrupo }}</p>
                <p class="mt-2">tu permiso termina en:</p>
                <div class="alert alert-primary" role="alert">
                  {{ horaAdelantada }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Aqui empieza en movil -->
    <div class="quitar-scroll mostrar">
      <div>
        <div class="nav-scroller py-1 mb-2">
          <nav class="nav d-fle justify-content-between">
            <div v-for="element in family.familiares" :key="element._id">
              <div class="card mr-2">
                <div
                  class="card-body text-center"
                  @click="
                    agregarPersona(
                      element.firstname,
                      element._id,
                      element.email
                    )
                  "
                >
                  <img
                    :src="element.urlimage"
                    alt="Avatar"
                    class="avatar sombreado"
                  />
                  <br />
                  <br />
                  <p class="card-text">{{ element.firstname }}</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        class="card border-0"
        v-if="listAsignado[0].name == '' && listAsignado[0].id == 0"
      >
        <div class="card-body text-center">
          <img
            src="../imagenes/select-profile.svg"
            alt="seleccion de perfil"
            height="150"
            width="150"
          />
          <br />
          <br />
          <p class="card-text">
            Selecciona un familiar para luego generar un permiso de salida
          </p>
        </div>
      </div>
      <div class="card-body text-center" v-else>
        <img
          src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY"
          alt="Avatar"
          class="avatar sombreado"
          height="50"
          width="50"
        />
        <br />
        <br />
        <p class="card-text">{{ listAsignado[0].name }}</p>
        <button
          type="button"
          class="btn bg-primary btn-block text-white"
          @click="obtenerPermiso()"
        >
          Asignar
        </button>
        <br />
        <p>tu permiso termina en:</p>
        <div class="alert alert-primary" role="alert">{{ horaAdelantada }}</div>
      </div>
    </div>
  </div>
</template>

<script>
let idGlobal = 8;
import moment from "moment";
import countdown from "moment-countdown";
import schedule from "node-schedule"; // para ejecutar un script cada cierto tiempo
export default {
  name: "seleccion",
  created() {
    this.getGrupo();
  },
  mounted() {
    setInterval(() => {
      this.cuentaAtras();
    }, 1000);
  },
  data() {
    return {
      family: [],
      list2: [],
      listAsignado: [{ name: null, id: 0, email: "", idGrupo: "" }],
      controlOnStart: true,
      horaAdelantada: "",
      asignar: false,
      elegido: false,
      asignado: [],
    };
  },
  methods: {
    mostrarNotificacion() {
      this.$toast.open({
        message: `Se asigno correctamente`,
        type: "success",
        duration: 3000,
        dismissible: true,
      });
    },
    getGrupo() {
      fetch(
        "http://localhost:3000/getFamily/" + sessionStorage.getItem("idGrupo")
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.asignado[0].elegido);
          this.elegido = data.asignado[0].elegido; //boolean del usuario
          this.asignado = data.asignado[0]; // el arraydel usuario asignado
          this.family = data; //todo el grupo
        })
        .catch((err) => console.log(err));
    },
    agregarPersona(nombre, idUser, email, idGrupo) {
      this.asignar = true;
      this.listAsignado = [
        { name: nombre, id: idUser, email: email, idGrupo: idGrupo },
      ];
    },
    cuentaAtras() {
      // nos da el contador para mostrar la fecha de caducidad del usuario
      const fechaActual = new Date().getTime(); //fecha actual en milisegundos
      const fechaFuturo = new Date(this.asignado.fechaCaducidad); //fecha de la base de datos del asignado la fecha de caducidad en milisegundos

      const fechaActualString = new Date(fechaActual).toString(); // comvirtiendo milisegundos  a formato  Apr 17 2020 11:48:1
      const fechaActualfuturoString = new Date(fechaFuturo).toString(); //  covirtiendo milisegundos a formato Apr 17 2020 11:48:1
      let fechaAdelantada = new Date(this.asignado.fechaCaducidad);
      this.horaAdelantada = moment(fechaAdelantada).countdown().toString(); //obtenemos la fecha en numeros para pasarsela a moment js
      if (fechaActualString == fechaActualfuturoString) {
        this.borrarAsignado();
        console.log("hola");
      }
    },
    borrarAsignado() {
      fetch("http://localhost:3000/quitarAsignado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "idAsignado": this.asignado._id ,"idGrupo": this.family._id }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then((err) => console.log(err));
    },
    AsignarUsuario(idAsignado, idGrupo) {
      let data = { idAsignado: idAsignado, idGrupo: idGrupo };
      fetch("http://localhost:3000/AsignarPersona", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.mostrarNotificacion();
          this.getGrupo(); // cuando se asigna un usuario recarga para pedir los datos nuevos del grupo
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
.quitar-scroll {
  overflow-x: hidden;
}
.color-card {
  background-color: #ededed;
}
.color-hover:hover {
  background-color: #ededed;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.borde-redondo {
  border-radius: 42px 42px 42px 42px;
  -moz-border-radius: 42px 42px 42px 42px;
  -webkit-border-radius: 42px 42px 42px 42px;
  border: 0px solid #000000;
}
</style>
