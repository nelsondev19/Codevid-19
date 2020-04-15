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

    putNavbar(state, payload){
      this.state.navbar = payload
    },quitNavbar(state, payload){
      this.state.navbar = payload
    },
  },
  actions: {

    putNavbar({commit},payload){
      console.log(payload)
      commit("putNavbar",payload)
    },
  quitNavbar({commit},payload){
      console.log(payload)
      commit("quitNavbar",payload)
      sessionStorage.removeItem('id');
      sessionStorage.removeItem("nombre");
         sessionStorage.removeItem("imagen");
      router.push({name:'Login'})
    }
  },
  modules: {},
});
