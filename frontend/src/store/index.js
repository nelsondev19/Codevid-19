import Vue from "vue";
import Vuex from "vuex";
import router from '../router'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
    usuarioid: "",
    UserName: "",
    id:"",
    navbar:false
  },
  mutations: {
    traerID(state, payload) {
      this.state.usuarioid = payload;
    },
    borrarID(state, payload){
      this.state.usuarioid = payload
    },
    getName(state, payload){
this.state.UserName = payload
    },
    putNavbar(state, payload){
      this.state.navbar = payload
    },quitNavbar(state, payload){
      this.state.navbar = payload
    },
  },
  actions: {
    getId({ commit }, payload) {
      console.log(payload);
      commit("traerID", payload);
    },
    
    getName({commit},payload){
      console.log("payload del nombre de usuario",payload)
      commit('getName',payload)
    },
    putNavbar({commit},payload){
      console.log(payload)
      commit("putNavbar",payload)
    },
  quitNavbar({commit},payload){
      console.log(payload)
      commit("quitNavbar",payload)
      sessionStorage.removeItem('id');
      router.push({name:'Login'})
    }
  },
  modules: {},
});
