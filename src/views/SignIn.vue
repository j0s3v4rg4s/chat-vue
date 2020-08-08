<template>
  <div>
    <h1 class="login-title">Welcome back</h1>

    <div class="filp-card">
      <div class="inner" :class="{ activate: !isLogin }">
        <div class="card">
          <v-card elevation="10">
            <v-card-text>
              <login />
            </v-card-text>
          </v-card>
          <span class="login-option" v-if="isLogin">
            don't have an account?
            <v-btn text color="accent" small @click="isLogin = false">register</v-btn>
          </span>
        </div>

        <div class="card card--back">
          <v-card elevation="10">
            <v-card-text>
              <register />
            </v-card-text>
          </v-card>
          <span class="login-option" v-if="!isLogin">
            do you have a account ?
            <v-btn text color="accent" small @click="isLogin = true">login</v-btn>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Register from "@/components/sigin/Register.vue";
import Login from "@/components/sigin/Login.vue";
import Vue from "vue";

export default Vue.extend({
  name: "SigIn",
  components: {
    Register,
    Login
  },
  data: () => ({
    isLogin: false
  })
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

.register-avatar {
  display: block;
  margin: 0 auto 10px;
}

.filp-card {
  perspective: 1000px;

  .inner {
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    width: 300px;
    margin: 20px auto 0;
    transform-origin: center right;

    .card {
      position: absolute;
      backface-visibility: hidden;
      width: 100%;

      &--back {
        transform: rotatey(180deg);
      }
    }

    &.activate {
      transform: translateX(-100%) rotateY(-180deg);
    }
  }
}
</style>
