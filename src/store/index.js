import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    listData: [],
    activeName: '',
    openNames: []
  },
  mutations: {
    setListData (state, listData) {
      state.listData = listData
    }
  },
  actions: {

  },
  modules: {
  }
})

export default store
