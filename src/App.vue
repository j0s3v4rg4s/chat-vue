<template>
  <v-app id="app">
    <v-progress-linear :active="load" :indeterminate="true" />
    <router-view v-if="complete" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import * as firebase from "firebase/app";
import "firebase/auth";

export default Vue.extend({
  data: () => ({ load: false, complete: false }),
  mounted() {
    this.load = true;
    firebase.auth().onAuthStateChanged(usr => {
      this.$store.commit("setUser", usr);
      this.load = false;
      this.complete = true;
    });
  }
});
</script>

<style lang="scss">
html,
body {
  font-family: "Roboto", sans-serif;
}
#app {
  background: #f1f1f1;
}
</style>
