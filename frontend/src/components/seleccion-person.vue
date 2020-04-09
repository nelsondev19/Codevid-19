<template>
  <div class="quitar-scroll">

<div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between">
    <div v-for="l in list1" :key="l.id">
    <div class="card mr-2">
                <div class="card-body text-center">
              <img src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY" alt="Avatar" class="avatar sombreado">
              <br><br>
                  <p class="card-text">{{l.name}}</p>
                </div>
</div>
</div>
    </nav>
  </div>
  <div class="card border-0">
                <div class="card-body text-center">
              <img src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2757601134526372&height=50&width=50&ext=1588869501&hash=AeRj92-mv8gXLRsY" alt="Avatar" class="avatar sombreado">
              <br><br>
                  <p class="card-text">Nelson</p>
                  <button type="button" class="btn bg-primary btn-block text-white">Asignar</button>
                </div>
  </div>
  </div>
</template>

<script>
// import draggable from "vuedraggable";
let idGlobal = 8;
export default {
  name: "seleccion",
  display: "Clone on Control",
  order: 4,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "Jesus", id: 1, },
        { name: "Paul", id: 2, },
        { name: "Peter", id: 3,},
        { name: "Nelson", id: 4,},
 

      ],
      list2: [
        { name: "Luc", id: 5 },
        { name: "Thomas", id: 6 },
        { name: "John", id: 7 }
      ],
      controlOnStart: true
    };
  },
  methods: {
    clone({ name }) {
      return { name, id: idGlobal++ };
    },
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    }
  }
};
</script>
<style >
.quitar-scroll {
  overflow-x: hidden;
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

</style>