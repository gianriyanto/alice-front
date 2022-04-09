import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      openCreateThread: false
    }
  },
  mutations: {
    TOGGLE_CREATE_THREAD() {
      this.state.openCreateThread = !this.state.openCreateThread;
    }
  },
  actions: {
    toggleCreateThread({ commit }) {
      commit('TOGGLE_CREATE_THREAD')
    }
  },
})

