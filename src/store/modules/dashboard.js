import { getUsers } from '@/api/user'
import { normalizeVuexArray } from '@/utils'

const dashboard = {
  state: {
    userList: {}
  },

  mutations: {
    SET_USERLIST: (state, userList) => {
      state.userList = userList
    }
  },

  actions: {
    async GetUsers({ commit }) {
      try {
        const users = await getUsers()
        commit('SET_USERLIST', normalizeVuexArray(users.data, 'username'))
      } catch (err) {
        throw err
      }
    }
  }
}

export default dashboard
