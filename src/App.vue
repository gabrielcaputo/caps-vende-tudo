<template>
  <div id="app">
    <TheHeader v-if="!noHeader" />
    <router-view :key="$route.fullPath" class="router" />
    <TheFooter v-if="!noFooter" />
    <TheLoading :show="loading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { TheHeader, TheFooter, TheLoading } from '@/components/organisms'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheLoading
  },

  computed: {

    ...mapState({
      loading: state => state.loading.loading,
    }),

    noHeader() {
      return this.$route.meta.noHeader
    },

    noFooter() {
      return this.$route.meta.noFooter
    },
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/main.scss";
</style>