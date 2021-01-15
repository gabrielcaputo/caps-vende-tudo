<template functional>
  <transition name="TheLoading--anim">
    <div v-if="props.show" class="TheLoading">
      <div class="TheLoading__wrapper">
        <div class="sk-folding-cube">
          <div class="sk-cube1 sk-cube" />
          <div class="sk-cube2 sk-cube" />
          <div class="sk-cube4 sk-cube" />
          <div class="sk-cube3 sk-cube" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TheLoading',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.TheLoading {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: $z-modal;
  position: fixed;

  &__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: $z-modal;
  }

  &--anim {
    &-enter-active {
      transition: all .2s ease-out;
    }
    &-leave-active {
      transition: all .2s ease-out;
    }
    &-enter {
      opacity: 0;
    }
    &-leave-to {
      opacity: 0;
    }
  }
}
</style>