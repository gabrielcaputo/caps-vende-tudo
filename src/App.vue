<template>
  <div id="app" :style="bg">
    <TheHeader v-if="!noHeader" />
    <vue-page-transition name="fade">
      <router-view :key="$route.fullPath" class="router" />
    </vue-page-transition>
    <TheFooter v-if="!noFooter" />
    <TheLoading :show="loading" />
    <CoolLightBox 
      :items="lightbox.items" 
      :index="lightbox.index"
      @close="closeLightbox">
    </CoolLightBox>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { TheHeader, TheFooter, TheLoading } from '@/components/organisms'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  name: 'App',
  components: {
    CoolLightBox,
    TheHeader,
    TheFooter,
    TheLoading
  },

  computed: {
    ...mapState({
      loading: state => state.loading.loading,
      lightbox: state => state.lightbox.lightbox,
    }),

    noHeader() {
      return this.$route.meta.noHeader
    },

    noFooter() {
      return this.$route.meta.noFooter
    },

    bg() {
      return {
          // backgroundImage: `url(${require(`@/assets/images/bg.png`)})`
      }
    },
  },

  methods: {
    ...mapActions({
      closeLightbox: 'lightbox/closeLightbox'
    }),
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

  .router {
    flex-grow: 1;
  }
}
</style>