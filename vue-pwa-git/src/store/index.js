import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
// import * as modules from './modules'
// import getters from './getters'

Vue.use(Vuex)
// 初始值
const state = {
  count: 0,
  homeData: {
    query: {
      created: ''
    }
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'product'
})

// if (module.hot) {
//   module.hot.accept(['./mutations'], () => {
//     const newMutations = require('./mutations').default
//     store.hotUpdate({
//         mutations: newMutations
//     })
//   })
// }

export default store