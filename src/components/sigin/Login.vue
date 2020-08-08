<template>
  <v-form @submit.prevent="login">
      <v-text-field outlined label="User" requerid :rules="emailRules"></v-text-field>
      <v-text-field outlined label="Password" :rules="fieldRule" type="password"></v-text-field>
      <v-btn color="primary" type="submit" block>login</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    fieldRule: [(v: string) => !!v || "Field is required"],
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
  }),
  methods: {
    login() {
      console.log('login')
    }
  }
})

</script>

<style scoped lang="scss">

</style>
