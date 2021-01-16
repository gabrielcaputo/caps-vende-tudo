<template>
  <div class="Home">
    <div class="Home__Container">
      <div class="Home__Product" v-for="(product, id) in products" :key="id" @click="goToProduct(id)">
        <div class="featuredPhoto" :style="productFeaturedPhoto(id)"></div>
        <div class="name">{{ product.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapState({
      products: state => state.products.products,
    }),
  },
  methods: {
    goToProduct(id) {
      this.$router.push(`/product/${id}`)
    },

    productFeaturedPhoto(id) {
      return {
        backgroundImage: `url(/products/${id}/${this.products[id].featuredPhoto})`,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Home {
  $unit: 24px;
  &__Container {
    display: flex;
    flex-wrap: wrap;
    gap: $unit;
  }
  &__Product {
    display: flex;
    width: calc(50% - (#{$unit} / 2));
    background: blue;
    padding-top: calc((50% - (#{$unit} / 2)) * 0.66666);
    position: relative;    
    overflow: hidden;
    cursor: pointer;

    @media screen and (max-width: 767px) {
      width: 100%;
      padding-top: 66.66666%;
    }

    &:hover {
      .featuredPhoto {
        transform: scale(1.2);
      }
      .name {
        bottom: 8px;
        opacity: 1;
      }
    }

    .featuredPhoto {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }

    .name {
      position: absolute;
      bottom: 8px;
      right: 8px;
      color: #fff;
      background: #333;
      padding: 8px;
      opacity: 1;
      transition: all 0.3s ease;
      @media screen and (min-width: 768px) {
        bottom: 0;
        opacity: 0;
      }
    }
  }
}
</style>