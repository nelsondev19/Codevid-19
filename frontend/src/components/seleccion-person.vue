<template>
  <div>
    <div class="no-mostrar-mobile">
  <div class="row">
    <div class="col-4">
        <div class="card color-card">
  <div class="card-body">
 <p class="font-weight-bold">
     <img src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY"
                    alt="Avatar"
                    class="avatar sombreado" />
   Nelson Hernandez
   </p>

<input type="search" class="form-control border-0 borde-redondo" placeholder="Buscar Personas"/>
  </div>
</div>
          <div  v-for="(element) in listUsers"
          :key="element.id" @click="agregarPersona(element.name, element.id)">
                <ul class="list-unstyled card color-hover ">
                  <li class="media">
                     <img
                    src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY"
                    alt="Avatar"
                    class="avatar sombreado"
                  />
                    <div class="media-body">
                      <h6 class="text-dark mt-3">{{ element.name }}</h6>
                    </div>
                  </li>
                </ul>
              </div>
    </div>
    <div class="col-8">
      <div class="card border-0" v-if="listAsignado[0].name == '' && listAsignado[0].id == 0 "> 
        <div class="card-body text-center"> 
          <img
            src="../imagenes/select-user.png"
            alt="seleccion de perfil"
            height="380"
            width="530"
          />
          <p class="font-weight-bolder">Selecciona un familiar para luego generar un permiso de salida</p>
        </div>
      </div>
      <div>
        <br/><br/><br/><br/>
   <div class="card mr-2 ml-4 "> 
        <div class="card-body text-center"> 
          <p class="font-weight-bolder">{{listAsignado[0].name}}</p>
          <p>nelson@gmail.com</p>
          <button class="btn btn-primary">Asignar</button>
        </div>
   </div>
      </div>
      
    </div>
  </div>
    </div>



    <div class="quitar-scroll mostrar">
      <div>
        <div class="nav-scroller py-1 mb-2">
          <nav class="nav d-fle justify-content-between">
            <div v-for="element in listUsers" :key="element.id">
              <div class="card mr-2">
                <div class="card-body text-center" @click="agregarPersona(element.name, element.id)">
                  <img
                    src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY"
                    alt="Avatar"
                    class="avatar sombreado"
                  />
                  <br />
                  <br />
                  <p class="card-text">{{ element.name }}</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div class="card border-0" v-if="listAsignado[0].name == '' && listAsignado[0].id == 0 ">
        <div class="card-body text-center">
          <img
            src="../imagenes/select-profile.svg"
            alt="seleccion de perfil"
            height="150"
            width="150"
          />
          <br />
          <br />
          <p class="card-text">Selecciona un familiar para luego generar un permiso de salida</p>
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
        <p class="card-text">{{listAsignado[0].name}}</p>
        <button type="button" class="btn bg-primary btn-block text-white" @click="obtenerPermiso()" v-show="permiso">
          Asignar
          </button>
          <button type="button" class="btn bg-primary btn-block text-white" @click="obtenerPermiso()">
          Ver permiso
          </button>
        <br />
        <p>tu permiso termina en:</p>
        <div class="alert alert-primary" role="alert">{{horaAdelantada}}</div>
      </div>
    </div>
  </div>
</template>

<script>
let idGlobal = 8;
import moment, {}from "moment";
import countdown from "moment-countdown";
export default {
  name: "seleccion",
  mounted() {
    setInterval(() => {
      this.cuentaAtras()
    }, 1000);
      
  },
  data() {
    return {
      listUsers: [
        { name: "Jesus", id: 1 },
        { name: "Paul", id: 2 },
        { name: "Peter", id: 3 },
        { name: "Nelson", id: 4 }
      ],
      list2: [],
      listAsignado: [{ name: "", id: 0 }],
      controlOnStart: true,
      permiso: false,
      horaAdelantada: ""
    };
  },
  methods: {
    agregarPersona(nombre, idUser) {
      this.listAsignado = [{ name: nombre, id: idUser }];
    },
    obtenerPermiso() {
      this.permiso = !this.permiso;
    },
    cuentaAtras(){
        let fecha = new Date().setSeconds(172800) //adelanta la hora actual en dos dias 
   let fechaAdelantada = new Date(fecha).toISOString()
   moment.locale('es')
   this.horaAdelantada = moment(fechaAdelantada).countdown().toString();
    },

}
};
</script>
<style >
.quitar-scroll {
  overflow-x: hidden;
}
.color-card{
  background-color: #EDEDED;
}
.color-hover:hover{
  background-color: #EDEDED;
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