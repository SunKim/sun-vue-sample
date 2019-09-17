import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/vuex/getters'
import mutations from '@/vuex/mutations'
import actions from '@/vuex/actions'

Vue.use(Vuex)

const state = {
  count: 0,
  empInfo: {
    id: 1,
    empNm: 'Sun Kim',
    jobTitle: 'Assistant Manager',
    sallary: 100000
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
