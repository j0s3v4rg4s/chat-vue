<template>
  <div>
    <h1 class="login-title">Welcome back</h1>
    <flip-card :rotate="!isLogin">
      <template v-slot:front>
        <v-card>
          <v-card-text>
            <login />
          </v-card-text>
        </v-card>
        <span class="login-option" v-if="isLogin">
          don't have an account?
          <v-btn text color="accent" small @click="isLogin = false">register</v-btn>
        </span>
      </template>
      <template v-slot:back>
        <v-card>
          <v-card-text>
            <register />
          </v-card-text>
        </v-card>
        <span class="login-option" v-if="!isLogin">
          do you have a account ?
          <v-btn text color="accent" small @click="isLogin = true">login</v-btn>
        </span>
      </template>
    </flip-card>
  </div>
</template>

<script lang="ts">
import Register from "@/components/sigin/Register.vue";
import Login from "@/components/sigin/Login.vue";
import FlipCard from "@/components/FlipCard.vue";
import Vue from "vue";

export default Vue.extend({
  name: "SignIn",
  components: {
    Register,
    Login,
    FlipCard,
  },
  data: () => ({
    isLogin: true,
  }),
});
</script>

<style lang="scss" scoped>
.login-title {
  text-align: center;
  margin-top: 40px;
}

.login-option {
  text-align: center;
  color: #a5a5a5;
  display: block;
  margin-top: 10px;
}
</style>
