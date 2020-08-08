<template>
  <v-form :valid="valid" @submit.prevent="register">
    <avatar class="avatar"/>
    <v-text-field outlined label="Name" requerid :rules="fieldRule" v-model="registerData.name" />
    <v-text-field outlined label="email" requerid :rules="emailRules" v-model="registerData.user" />
    <v-text-field outlined label="Password" :rules="fieldRule" v-model="registerData.password" />
    <v-btn color="primary" type="submit" block :loading="load">register</v-btn>
    <span class="register-error">{{ error }}</span>
  </v-form>
</template>

<script lang="ts">
import userMixin from "@/mixins/User.mixin.vue";
import Avatar from "@/components/Avatar.vue";
import mixins from "vue-typed-mixins";

export default mixins(userMixin).extend({
  components: {
    Avatar
  },
  data: () => ({
    load: false,
    components: {
      Avatar
    },
    fieldRule: [(v: string) => !!v || "Field is required"],
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    registerData: {
      name: "",
      user: "",
      password: ""
    },
    valid: true,
    error: null
  }),
  methods: {
    register() {
      if (!this.$data.valid) {
        return;
      }
      const avatar = "https://api.adorable.io/avatars/197/" + this.registerData.user;
      this.load = true;
      this.createUser(this.registerData.name, this.registerData.user, this.registerData.password, avatar)
        .catch(err => {
          this.error = err.message;
        })
        .finally(() => {
          this.load = false;
        });
    }
  }
});
</script>

<style lang="scss">
.register-error {
  text-align: center;
  display: block;
  font-size: 12px;
  color: red;
}
.avatar {
  display: block;
  margin: 0 auto 20px;
}
</style>
