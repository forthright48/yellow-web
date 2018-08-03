import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import dashboard from './modules/dashboard.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    dashboard
  },
  getters
})

export default store
