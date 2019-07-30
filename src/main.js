import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  beforeCreate(){
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch('STATE_CHANGED', user)
    });
  },

  render: h => h(App)


}).$mount('#app')
