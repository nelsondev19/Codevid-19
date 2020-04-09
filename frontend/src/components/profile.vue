<template>
  <div>
          <div>
        <div class="container">
          <br/>   
          <div class="row">
          <div class="col-sm">
            </div>
            <div class="col-sm">
              <br><br><br>
              <div class="card border-0">
                <div class="card-body text-center">
              <img src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY" alt="Avatar" class="avatar sombreado">
              <br><br>
                  <p class="card-text">{{usuario.firstname}}</p>
                  <p class="card-text">{{usuario.email}} </p>
                  <button type="button" class="btn bg-primary btn-block text-white">Cerrar Sesión</button>
                </div>
              </div>
            </div>
            <div class="col-sm">
            </div>
          </div>
        </div>
  </div>
               
  </div>
</template>

<script>
// @ is an alias to /src
import vuex from 'vuex'
import { mapActions , mapState} from 'vuex'
import createGrupo from "@/components/create-grupo.vue";
export default {
  created(){
  this.OneUser()
  },
  data(){
   return{
     usuario: [],
    
   }
  },
  methods:{
    ...mapActions(['getId']),
     OneUser(){
       fetch('http://localhost:3000/oneUser/' + this.$route.params.id)
       .then(res => res.json())
       .then(data => this.usuario = data)
       .catch(err => console.log(err))
       this.getId(this.$route.params.id)
     }
  },
  computed: {
    ...mapState(['usuarioid'])
  },
}
</script>

<style>
.avatar {
  vertical-align: middle;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.bg-encabezado{
  background-color: #110319;
}
.sombreado{
  -webkit-box-shadow: 10px 11px 24px -15px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 11px 24px -15px rgba(0,0,0,0.75);
box-shadow: 10px 11px 24px -15px rgba(0,0,0,0.75);
}
</style>