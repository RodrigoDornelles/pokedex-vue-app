import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://pokedex-yii-api.herokuapp.com/'
Vue.config.productionTip = false
Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  render: h => h(App)
});
