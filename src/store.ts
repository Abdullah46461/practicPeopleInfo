import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
    return {
      users: [],
      singleUser: []
    }
  },

  mutations: {
    singleUser(state: any, payload: object[]) {
      state.singleUser = payload
    },
    setUsers(state: any, payload: object[]) {
      state.users = payload
    }
  },

  actions: {
    async fetchSingleUser(store: any, id: number) {
      try {
        await axios
          .get(`https://fakestoreapi.com/users/${id}`)
          .then((res) => store.commit('singleUser', res.data))
        console.log(store.singleUser)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchUserInfo(store: any, rev: string) {
      try {
        await axios
          .get(`https://fakestoreapi.com/users?${rev}`)
          .then((res) => store.commit('setUsers', res.data))
      } catch (err) {
        console.log(err)
      }
    }
  }
})
