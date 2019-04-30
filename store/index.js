import Vuex from 'vuex'
import loginModule from './modules/login'


const store = () => {
  return new Vuex.Store({
    modules: {
      loginModule
    },
    state: () => ({

    }),
    mutations: {},
    actions: {},
    getters: {}
  })
}

export default store
