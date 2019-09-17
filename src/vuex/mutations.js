const mutations = {
  plusCount: function(state) {
    state.count++
  },
  plusCountPayload: function(state, payload) {
    state.count += payload
  },
  minusCount: function(state) {
    state.count--
  },
  minusCountPayload: function(state, payload) {
    state.count -= payload
  },
  setEmpInfo: function(state, payload) {
    state.empInfo = _.assign({}, state.empInfo, payload)
  }
}

export default mutations
