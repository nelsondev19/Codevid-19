<template>
  <div>
          <div>
        <div class="container">
          <br/>   
          <div class="row">
          <div class="col-sm">
            </div>
            <div class="col-sm">
              <div class="card">
                <div class="card-header text-center">
                  Bienvenido
                </div>
                <div class="card-body text-center">
              <img src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY" alt="" sizes="50" srcset="" >
              <br><br>
                  <p class="card-text text-center">usuario: {{usuario.firstname}}</p>
                  <p class="card-text text-center">Email: {{usuario.email}} </p>
                  <button type="button" class="btn btn-danger">Cerrar Sesión</button>
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
import createGrupo from "@/components/create-grupo.vue";
export default {
  created(){
  this.OneUser()
  },
  data(){
   return{
     usuario: []
   }
  },
  methods:{
     OneUser(){
       fetch('http://localhost:3000/oneUser/' + this.$route.params.id)
       .then(res => res.json())
       .then(data => this.usuario = data)
       .catch(err => console.log(err))
     }
  }
}
</script>
