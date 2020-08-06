<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import * as firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: 'AIzaSyD3Jk5AuQsKOJHf06DVsmFiFJQ2R5wN-8Y',
  authDomain: 'mercado-43e76.firebaseapp.com',
  databaseURL: 'https://mercado-43e76.firebaseio.com',
  projectId: 'mercado-43e76',
  storageBucket: 'mercado-43e76.appspot.com',
  messagingSenderId: '698286808209',
  appId: '1:698286808209:web:1ae068ad44e775ee15f330',
  measurementId: 'G-4J8W35SW1Z',
});

export default Vue.extend({});
</script>

<style lang="scss">
html,
body {
  font-family: 'Roboto', sans-serif;
}
#app {
  background: #f1f1f1;
}
</style>
