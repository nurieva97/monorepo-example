import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import plugin from '@custom/package-c';

Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store({})
Vue.use(plugin, { store })

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
