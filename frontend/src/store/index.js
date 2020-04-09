import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarioid: "",
  },
  mutations: {
    traerID(state, payload) {
      this.state.usuarioid = payload;
    },
  },
  actions: {
    getId({ commit }, payload) {
      console.log(payload);
      commit("traerID", payload);
    },
  },
  modules: {},
});
