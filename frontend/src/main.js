import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import vueToaast from "vue-toast-notification"; // importando libreria para las notificaciones
import 'vue-toast-notification/dist/theme-default.css';

Vue.use(vueToaast)
Vue.config.productionTip = false
Vue.use(Vuelidate)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
