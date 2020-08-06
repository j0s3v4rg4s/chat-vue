<template>
  <div>
    <h1 class="login-title">Welcome back</h1>

    <div class="filp-card">
      <div class="inner" :class="{ activate: !isLogin }">
        <div class="card">
          <v-card elevation="10">
            <v-form @submit.prevent="login">
              <v-card-text>
                <v-text-field outlined label="User" requerid :rules="fieldRule"></v-text-field>
                <v-text-field outlined label="Password" :rules="fieldRule"></v-text-field>
                <v-btn color="primary" type="submit" block>login</v-btn>
              </v-card-text>
            </v-form>
          </v-card>
          <span class="login-option" v-if="isLogin">
            don't have an account?
            <v-btn text color="accent" small @click="isLogin = false">register</v-btn>
          </span>
        </div>

        <div class="card card--back">
          <v-card elevation="10">
            <v-form @submit.prevent="register" v-model="valid" ref="form">
              <v-card-text>
                <avatar :user="registerData.user" class="register-avatar" />
                <v-text-field outlined label="Name" requerid :rules="fieldRule" v-model="registerData.name" />
                <v-text-field outlined label="User" requerid :rules="fieldRule" v-model="registerData.user" />
                <v-text-field outlined label="Password" :rules="fieldRule" v-model="registerData.password" />
                <v-btn color="primary" type="submit" block>register</v-btn>
              </v-card-text>
            </v-form>
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
import Vue from 'vue';
import Avatar from '@/components/Avatar.vue';
export default Vue.extend({
  name: 'Login',
  components: {
    Avatar,
  },
  data: () => ({
    fieldRule: [(v: string) => !!v || 'Field is required'],
    isLogin: false,
    registerData: {
      name: '',
      user: '',
      password: '',
    },
    valid: true,
  }),
  methods: {
    login() {
      console.log('submit complete', this.$route.path);
    },
    register() {
      if (!this.$data.valid) {
        return;
      }
    },
  },
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
