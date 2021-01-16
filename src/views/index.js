import notFound from './notFound/index.routes'
import home from './home/index.routes'
import product from './product/index.routes'

export default [
  ...notFound,
  ...home,
  ...product
]