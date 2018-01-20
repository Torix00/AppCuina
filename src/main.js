// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  data: {
  	title: 'AppCuina'
  },
  router,
  template: '<App/>',
  components: { App }
});

