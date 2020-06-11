import Vue from 'vue'
import App from './pages/Index.vue'
import './styles/index.scss'
// import "./assets/styles/index.css";

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
