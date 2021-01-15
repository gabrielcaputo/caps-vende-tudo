const Home = () => import( /* webpackChunkName: `home` */ './Home.vue')

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
]

export default routes