<template>
  <v-form @submit.prevent="login">
    <v-text-field outlined label="User" requerid :rules="emailRules" v-model="email" />
    <v-text-field outlined label="Password" :rules="fieldRule" type="password" v-model="password" />
    <v-btn color="primary" :loading="load" type="submit" block>login</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import * as firebase from "firebase/app";
import "firebase/auth";
export default Vue.extend({
  data: () => ({
    fieldRule: [(v: string) => !!v || "Field is required"],
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    load: false,
    error: "",
    email: "",
    password: "",
  }),
  methods: {
    login() {
      this.load = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push("/"))
        .catch(({ message }) => (this.error = message))
        .finally(() => (this.load = false));
    },
  },
});
</script>

<style scoped lang="scss">
</style>
