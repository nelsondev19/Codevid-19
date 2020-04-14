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
                  src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY"
                  alt="Avatar"
                  class="avatar sombreado"
                />
                <br />
                <br />
                {{ usuarioid }}
                <p class="card-text">{{ usuario.firstname }}</p>
                <p class="card-text">{{ usuario.email }}</p>
                <button
                  type="button"
                  class="btn bg-primary btn-block text-white"
               @click="quitNavbar(false)"
               
                >
                  Cerrar Sesión
                </button>
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
export default {
  async created() {
    await this.OneUser();
  },
  mounted() {
    this.putNavbar(true)
    sessionStorage.setItem('id',this.$route.params.id)
   const id = sessionStorage.getItem('id')
   console.log("mi id es ", id)

 setTimeout(() => {
   let apellido = this.usuario.last_name
   if (apellido == undefined) {
     apellido = "" 
   }

   this.getName(this. usuario.firstname+ " "+ apellido)
 }, 1000);
  },
  data() {
    return {
      usuario: []
    };
  },
  methods: {
    ...mapActions(["getId", "borrarID","getName","putNavbar","quitNavbar"]),
    OneUser() {
      fetch("http://localhost:3000/oneUser/" + this.$route.params.id)
          
        .then(res => res.json())
        .then(data => (this.usuario = data))
        .catch(err => {
          if (err) {// si nos da error significa que no existe el id que le pasamos en la base de datos
             router.push({name:'Login' })
          }
        });
        this.getName(this.usuario.firstname + " " + this.usuario.last_name)
              
    },
    cerrarSesion(){
      
        sessionStorage.removeItem('id');
       router.push({name:'Login'})
    }
  },
  computed: {
    ...mapState(["usuarioid"])
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
