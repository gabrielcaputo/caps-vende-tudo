<template>
  <div class="Product">
    <div class="Product__Featured" :style="productFeaturedPhoto">
      <div class="Product__FeaturedWrap">
        <div class="Product__Name">{{ product.name }}</div>
        <div class="Product__Price">{{ product.price }}</div>
      </div>
    </div>
    <div class="Product__Container">
      <masonry
        :cols="productPhotosColumns"
        :gutter="16"
      >
        <div class="Product__Photo" v-for="(photo, i) in product.photos.slice(1)" :key="i+1" @click="openLightbox(i+1)">
          <img class="photo" :src="`${photo.thumb ? photo.thumb : photo.src}`" :alt="photo.title">
          <div v-if="photo.title" class="title">{{ photo.title }}</div>
        </div>
      </masonry>
      <Markdown :src="`/products/${this.$route.params.id}/description.md`" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Markdown } from '@/components/molecules'
export default {
  name: 'product',
  components: {
    Markdown
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    ...mapState({
      lightbox: state => state.lightbox.lightbox,
      products: state => state.products.products
    }),

    product() {
      return this.products[this.$route.params.id]
    },

    productFeaturedPhoto() {
      return {
        backgroundImage: `url(${this.product.photos[0].src})`,
      }
    },

    productPhotosColumns() {
      return this.window.width < 768 ? this.product.columnsMobile : this.product.columns
    }
  },
  mounted() {
    this.checkIfProductExists()
    this.setLightbox(this.products[this.$route.params.id].photos)
  },
  methods: {
    ...mapActions({
      setLightbox: 'lightbox/setLightbox',
      openLightbox: 'lightbox/openLightbox',
    }),

    checkIfProductExists() {
      if (!this.product) {
        this.$router.push('/notFound')
      }
    },

    handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
    }
  }
}
</script>

<style lang="scss" scoped>
.Product {
  &__Featured {
    margin-top: -114px;
    width: 100%;
    background: #ccc;
    background-size: cover;
    background-position: center;
    position: relative;
    margin-bottom: 64px;
    @media screen and (orientation: landscape) {
      height: calc(100vh - 48px);      
    }
    @media screen and (orientation: portrait) {
      height: calc(100vw * 0.66666);
    }
    @media screen and (max-width: 767px) {
      margin-top: -80px;
      margin-bottom: 32px;
    }
  }
  &__FeaturedWrap {
    position: absolute;
    max-width: 1280px;
    padding: 0 48px;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
    top: 0;
  }

  &__Name, &__Price {
    position: absolute;
    margin: 0;
    padding: 8px;
    background: #333;
    color: #fff;
    display: table;
    width: auto;
    font-size: 24px;
    z-index: 2;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }

  &__Name {
    bottom: -29px;
    left: 48px;

    @media screen and (max-width: 767px) {
      bottom: -18px;
      left: 24px;
      font-size: 18px;
    }
  }

  &__Price {
    bottom: -29px;
    right: 48px;
    background: rgba($green, 1);
    @media screen and (max-width: 767px) {
      background: rgba($green, 0.8);
      bottom: auto;
      left: auto;
      right: 24px;
      top: 24px;
      font-size: 24px;
    }
    
  }

  &__Container {
    padding-top: 0;
    position: relative;
  }

  &__Photo {
    background-color: #eee;
    display: block;
    margin: 0 0 16px;
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      .photo {
        transform: scale(1.05);
      }
      .title {
        opacity: 1;
        bottom: 8px;
      }
    }

    .photo {
      width: 100%;
      display: block;
      border: 0;
      margin: 0;
      padding: 0;
      transition: all 0.3s ease;
    }
    .title {
      position: absolute;
      bottom: 0px;
      right: 8px;
      max-width: calc(100% - 16px);
      background: #333;
      padding: 8px;
      color: #fff;
      opacity: 0;
      transition: all 0.3s ease;
      font-size: 14px;
      @media screen and (max-width: 768px) {
        opacity: 0 !important;
      }
    }
  }
}
</style>

<style lang="scss">
.Product {
  &__Container {
    table {
      margin-bottom: 32px;
    }
    table thead th {
      // padding: 16px 0;
      background: #666;
      color: #fff;
    }
    table tbody td:first-of-type {
      font-weight: bold;
    }
  }
}
</style>