import Vue from 'vue';
import App from './App.vue';
//Firebase
import VueFire from 'vuefire';
Vue.use(VueFire);
// Vuex
import store from './store';

//
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');