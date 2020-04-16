<template>
  <div class="home">

    <seleccionPerson v-if="incluido" />
    <createGrupo v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import createGrupo from "@/components/create-grupo.vue";
import seleccionPerson from "@/components/seleccion-person.vue";
export default {
  name: "Home",
  data() {
    return {
      incluido: false,
    };
  },
  components: {
    createGrupo,
    seleccionPerson
  },
  created() {
    this.ConsultarGrupo();
  },
  methods: {
    ConsultarGrupo() {
      fetch("http://localhost:3000/getGrupo/" + sessionStorage.getItem("idGrupo"))
        .then(response => response.json())
        .then(data => {
          this.incluido = data.incluido;
        })
        .catch(() => {
          this.incluido = false
        });
    }
  }
};
</script>