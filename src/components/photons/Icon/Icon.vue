<template>
  <img
    class="Icon"
    :class="iconClasses"
    v-bind="$attrs"
    :src="src"
    @click="$emit('click')"
  >
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'black',
      validator: val => ['white', 'light', 'dark', 'black'].includes(val)
    }
  },
  computed: {
    src() {
      return require(`@/assets/icons/${this.name}.svg`)
    },
    iconClasses() {
      return `Icon--${this.color} Icon--${this.name}`
    }
  }
}
</script>

<style lang="scss" scoped>
.Icon {
  height: 100%;
  display: block;
  &--dark {
    filter: $filter-dark;
  }
  &--light {
    filter: $filter-light;
  }
}
</style>
