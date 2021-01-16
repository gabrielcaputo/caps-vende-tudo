export default (router) => {
    router.beforeEach(async (to, from, next) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      next()
    })
  }