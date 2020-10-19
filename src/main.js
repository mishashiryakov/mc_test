import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {App},
  render: h => h(App)
}).$mount('#app')
