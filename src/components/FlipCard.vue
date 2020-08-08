<template>
  <div class="content">
    <div class="card" :class="{rotate}">
      <div class="side">
        <slot name="front"></slot>
      </div>
      <div class="side side--back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FlipCard",
  props: {
    rotate: Boolean,
  },
});
</script>


<style lang="scss" scoped>
.content {
  width: 300px;
  margin: auto;
  perspective: 1000px;

  .card {
    transform-style: preserve-3d;
    transition: transform 0.8s;
    position: relative;
    &.rotate {
      transform: rotateY(180deg);
    }
    .side {
      width: 100%;
      backface-visibility: hidden;
      position: absolute;
      z-index: 0;
      &--back {
        transform: rotateY(180deg);
        z-index: 9;
      }
    }
  }
}
</style>
