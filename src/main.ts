import Vue from "vue";
import VueRx from "vue-rx";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBZpyWwbUoWR5Xxj0KQ17bRXVKOmU_4s90",
  authDomain: "vue-chat-6795e.firebaseapp.com",
  databaseURL: "https://vue-chat-6795e.firebaseio.com",
  projectId: "vue-chat-6795e",
  storageBucket: "vue-chat-6795e.appspot.com",
  messagingSenderId: "514219578910",
  appId: "1:514219578910:web:b2418ecb43579a05fb400f",
  measurementId: "G-DB48RN3HSR"
});

Vue.use(VueRx);
const vu = new Vue({
  vuetify,
  router,
  data: () => ({
    tempo: null as firebase.User | null
  }),
  mounted() {
    firebase.auth().onAuthStateChanged(usr => {
      this.tempo = usr;
    });
  },
  render: h => h(App)
}).$mount("#app");
