<template>
  <div id="app">
    <TheHeader v-if="!noHeader" />
    <vue-page-transition name="fade">
      <router-view :key="$route.fullPath" class="router" />
    </vue-page-transition>
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

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // background: #ccc;

  .router {
    flex-grow: 1;
  }
}
</style>