<template>
  <div class="Home">
    <div class="Home__Container">
      <div class="Home__Product" v-for="(product, id) in products" :key="id" @click="goToProduct(id)">
        <div class="featuredPhoto" v-lazy:background-image="products[id].photos[0].src"></div>
        <div class="title">{{ product.title }}</div>
        <div class="price">{{ product.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  metaInfo() {
    return {
      title: 'Caps Vende Tudo!',
    }
  },
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
  }
}
</script>

<style lang="scss" scoped>
.Home {
  $unit: 24px;
  &__Container {
    display: flex;
    flex-wrap: wrap;
    padding: 0 calc(48px - (#{$unit} / 4));
    @media screen and (max-width: 767px) {
      padding: 0 calc(16px - (#{$unit} / 4));
    }
  }
  &__Product {
    display: flex;
    width: calc(50% - #{$unit});
    background: #ccc;
    padding-top: calc((50% - (#{$unit} / 2)) * 0.66666);
    position: relative;    
    overflow: hidden;
    margin: calc(#{$unit} / 2);
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),
                0 2px 2px 0 rgba(0,0,0,.14),
                0 1px 5px 0 rgba(0,0,0,.12);
    cursor: pointer;

    @media screen and (max-width: 767px) {
      width: 100%;
      padding-top: 66.66666%;
    }

    &:hover {
      .featuredPhoto {
        transform: scale(1.05);
      }
      .title {
        top: 8px;
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
      background-repeat: no-repeat;
      transform: scale(1.01);
      transition: transform 0.3s ease;

      &[lazy=loading] {
        background-size: 64px;
        background-color: #eee;
      }
    }

    .title {
      position: absolute;
      top: 8px;
      left: 8px;
      color: #fff;
      background: rgba(#333, 0.8);
      padding: 8px;
      opacity: 1;
      transition: all 0.3s ease;
      max-width: calc(100% - 16px);
      border-radius: 4px;
      @media screen and (min-width: 768px) {
        top: 0;
        opacity: 0;
      }
    }

    .price {
      font-size: 24px;
      position: absolute;
      bottom: 8px;
      right: 8px;
      color: #fff;
      background: rgba($green, 0.8);
      padding: 8px;
      opacity: 1;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
  }
}
</style>