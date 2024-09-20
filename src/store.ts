import {createStore} from 'vuex';
import axios from 'axios'

export default createStore({
  state(){
    return{
users: [],
    }
  },

  mutations:{
    setUser(state: any, payload: object[]){
      state.users = payload;
    }
  },

  actions: {
    async fetchUserInfo(store: any){
      try {
        await axios.get('https://fakestoreapi.com/users')
          .then((res)  => store.commit('setUser', res.data) )
      }catch(err){
        console.log(err)
      }
    }
  }
})
