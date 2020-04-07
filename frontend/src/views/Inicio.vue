<template>
  <div class="home">
    <createGrupo/>
  </div>
</template>

<script>
// @ is an alias to /src
import createGrupo from "@/components/create-grupo.vue";
export default {
  name: 'Home',
  components: {
    createGrupo
  }
}
</script>
