const NotFound = () => import( /* webpackChunkName: `notFound` */ './NotFound.vue')


const routes = [
  {
    name: 'notFound',
    path: '*',
    component: NotFound
  },
]

export default routes