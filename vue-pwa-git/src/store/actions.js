import axios from 'axios'

const actions = {
  multi ({commit}) {
    setTimeout(() => {
      commit('multi')
    }, 500)
  },
  homeload ({commit}, param) {
    // commit(param.type)
    axios.get(param.url)
      .then(function (response) {
        console.log('response is : ' + JSON.stringify(response))
        if (response.status === 200) {
          commit('homeload', response.data)
        } else {
          commit('homeload', response.data)
        }
      })
      .catch(function (err) {
        console.log('error is : ' + err)
        // commit('homeload', )
      })
  }
}

export default actions