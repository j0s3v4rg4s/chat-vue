<template>
  <img :src="avatarImage" alt="avatar" />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Avatar',
  props: {
    user: String,
  },
  computed: {
    avatarImage() {
      return 'https://api.adorable.io/avatars/197/' + this.user;
    },
  },
});
</script>

<style lang="scss" scoped>
img {
  width: 100px;
  border-radius: 30%;
}
</style>
