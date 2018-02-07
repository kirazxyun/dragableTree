import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    listData: [],
    activeName: '1-1',
    openNames: ['1', '2']
  },
  mutations: {
    setListData (state, listData) {
      state.listData = listData
    },
    setActiveName (state, name) {
      state.activeName = name
    },
    setOpenNames (state, openNames) {
      state.openNames = openNames
    }
  },
  actions: {

  },
  modules: {
  }
})

export default store
