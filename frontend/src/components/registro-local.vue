<template>
    <div>
        <form class="form-group mt-3" @submit.prevent="crearUsuario" >
<input type="text" class="form-control mt-3"  name="password" v-model="username">
<input type="password" class="form-control mt-3" placeholder="password" name="username" v-model="password">
<input type="email" class="form-control mt-3" placeholder="correo"  v-model="correo">
<button type="submit" class="btn btn-primary btn-block mt-3" >crear usuario</button>
{{username}}
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"Crear-usuario",
    data() {
        return {
            password:"",
            username:"",
            correo:""
        }
    },
    methods: {
        crearUsuario(){
 axios.post('http://localhost:3000/signup',{
     username:this.username,
     password:this.password,
     correo:this.correo
 })
.then( res => console.log(res))
.catch(err => console.log(err))
}
    },
}
</script>