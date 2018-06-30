// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
Vue.component('navbar', Navbar)
Vue.component('product-list-one', ProductListOne)
Vue.component('product-list-two', ProductListTwo)
Vue.component('app-footer', Footer)
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify' 
Vue.use(Vuetify)
Vue.config.productionTip = false

let app = null;

// wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {

  // init app if not already created
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})

/* eslint-disable no-new 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/
