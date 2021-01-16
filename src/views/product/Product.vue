<template>
  <div class="Product">
    <div class="Product__Featured" :style="productFeaturedPhoto">
    </div>
    <div class="Product__Container" >
      <h1>{{ product.name }}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'product',
  components: {},
  computed: {
    ...mapState({
      products: state => state.products.products,
    }),

    product() {
      return this.products[this.$route.params.id]
    },

    productFeaturedPhoto() {
      return {
        backgroundImage: `url(/products/${this.$route.params.id}/${this.product.featuredPhoto})`,
      }
    }
  },
  mounted() {
    this.checkIfProductExists()
  },
  methods: {
    checkIfProductExists() {
      if (!this.product) {
        this.$router.push('/notFound')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Product {
  &__Featured {
    margin-top: -84px;
    width: 100%;
    background: red;
    background-size: cover;
    background-position: center;
    @media screen and (orientation: landscape) {
      height: calc(100vh - 48px);      
    }
    @media screen and (orientation: portrait) {
      padding: 33.3333333%
    }
  }
  &__Container {
    padding-top: 0;
    h1 {
      margin: 0;
      margin-top: -29px;
      padding: 8px;
      background: #333;
      color: #fff;
      display: table;
      width: auto;
      font-size: 24px;
      @media screen and (min-width: 768px) {
        font-size: 36px;
      }
    }
  }
}
</style>
