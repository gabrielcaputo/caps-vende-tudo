const Product = () => import( /* webpackChunkName: `Product` */ './Product.vue')

const routes = [
  {
    name: 'product',
    path: '/product/:id',
    meta: { headerTheme: 'light' },
    component: Product
  },
]

export default routes