const actions = {
  multi ({commit}) {
    setTimeout(() => {
      commit('multi')
    }, 500)
  }
}

export default actions