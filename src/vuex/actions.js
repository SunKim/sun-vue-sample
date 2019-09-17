const actions = {
  plusCount: function (context) {
    console.log('before async - count : ' + context.state.count)
    return setTimeout(function () {
      context.commit('plusCount')

      console.log('after async - count : ' + context.state.count)
    }, 1000);
  },
  plusCountPayload: function (context ,payload) {
    console.log('before async - count : ' + context.state.count)
    return setTimeout(function () {
      context.commit('plusCountPayload', payload)

      console.log('after async - count : ' + context.state.count)
    }, 1000);
  },
  minusCount: function (context) {
    console.log('before async - count : ' + context.state.count)
    return setTimeout(function () {
      context.commit('minusCount')

      console.log('after async - count : ' + context.state.count)
    }, 1000);
  }
}

export default actions
