import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null as firebase.User | null
  },
  mutations: {
    setUser(state, user: firebase.User) {
      state.user = user;
    }
  }
});

export default store;
