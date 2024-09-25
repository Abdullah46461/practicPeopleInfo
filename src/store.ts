import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
    return {
      loader: false,
      users: [],
      singleUser: {}
    }
  },

  mutations: {
    singleUser(state: any, payload: object): void {
      state.singleUser = payload
    },
    setUsers(state: any, payload: object[]): void {
      state.users = payload
    }
  },

  actions: {
    async fetchSingleUser(store: any, id: number) {
      store.state.loader = true
      try {
        const res = await axios.get(`https://fakestoreapi.com/users/${id}`)
        store.commit('singleUser', res.data)
      } catch (err) {
        console.log(err)
      } finally {
        store.state.loader = false
      }
    },
    async fetchUserInfo(store: any, rev: string) {
      try {
        await axios
          .get(`https://fakestoreapi.com/users?${rev}`)
          .then((res) => store.commit('setUsers', res.data))
      } catch (err) {
        console.error(err)
      }
    }
  }
})
