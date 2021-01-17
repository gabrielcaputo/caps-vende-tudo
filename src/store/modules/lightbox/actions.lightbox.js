export default {
  setLightbox({ commit }, items) {
    commit('SET_LIGHTBOX', items)
  },

  openLightbox({ commit }, index) {
    commit('SET_LIGHTBOX_INDEX', index)
  },

  closeLightbox({ commit }) {
    commit('SET_LIGHTBOX_INDEX', null)
  }
}