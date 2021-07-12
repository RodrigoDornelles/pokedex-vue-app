import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@materializecss/materialize/dist/js/materialize.min.js'

axios.defaults.baseURL = 'https://pokedex-yii-api.herokuapp.com/'
Vue.config.productionTip = false
Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  render: h => h(App)
});
