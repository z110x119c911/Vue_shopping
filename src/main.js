// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import VueParallaxy from 'vue-parallaxy'

import 'bootstrap'
import 'jquery'

import './validation'
// Vue.use(VueAxios,axios);

Vue.component('VueParallaxy',VueParallaxy)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// export default{
//   name: 'App',
//   created() {
//     this.$http.get(api).then((response) => {
//       console.log(response.data);
//     })
//   },
// }