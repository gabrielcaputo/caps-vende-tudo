const NotFound = () => import( /* webpackChunkName: `notFound` */ './NotFound.vue')


const routes = [
  {
    name: 'notFound',
    path: '*',
    // meta: { noHeader: true },
    component: NotFound
  },
]

export default routes