<template>
    <div>
        <form class="form-group mt-3" action="http://localhost:3000/signup" method="POST" >
<input type="text" class="form-control mt-3"   v-model="username" name="username" placeholder="username">
<input type="password" class="form-control mt-3" placeholder="password" name="password" v-model="password">
<input type="email" class="form-control mt-3" placeholder="correo"  v-model="correo">
<button type="submit" class="btn btn-primary btn-block mt-3" >crear usuario</button>
{{username}}
        </form>
    </div>
</template>
<script>
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
            let data = {"username":this.username,"password":this.password,"correo":this.correo}
            console.log(data);
            
 fetch('http://localhost:3000/signup',{
     method: "POST",
    headers: {
    'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
 })
.then( res => console.log(res))
.catch(err => console.log(err))
}
    },
}
</script>