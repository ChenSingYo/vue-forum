import { createStore, createLogger } from 'vuex'
import usersAPI from './../apis/users'

export default createStore({
  // 相當於components的data
  state: {
    currentUser: {
      id: 1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  // 修改state的方法，相當於methods
  // commit 發動 mutations
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 透過api取得的 currentUser，取代state裡的
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  // 透過API請求資料
  // 用dispatch發動actions
  actions: {
    // 切換網址時，route呼叫此方法，向api取得當前使用者資料
    async fetchCurrentUser ({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { id, name, email, image, isAdmin } = data
        // 呼叫mutations裡的方法，取得新的使用者資料，覆蓋state裡的
        commit('setCurrentUser', {
          id, name, email, image, isAdmin
        })
        console.log('data', data)
      } catch (e) {
        console.log(e.message)
      }
    }
  },
  // 像是多了一個store，依照類別做劃分。
  modules: {
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
