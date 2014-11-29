var Map = require('immutable').Map;
var Store = require('nuclear-js').Store;

function createTimes(start, duration) {
  var times = [];

  for(var i = start, stop = i + duration; i <= stop; i++) {
    var adjustedTime = i,
      timeframe = 'AM';
    if(i > 12) {
      adjustedTime = i - 12;
      timeframe = 'PM';
    } else if (i === 12) {
      timeframe = 'PM';
    }
    times.push(adjustedTime + ':00' + timeframe, adjustedTime + ':30' + timeframe)
  }
  return times;
}

module.exports = Store({
  getInitialState: function() {
    return createTimes(9, 12);
  },

  initialize: function() {
    this.on('updateTimes', function(state, payload) {
      return state.push(Map({
        time: payload.time,
        duration: payload.duration
      }))
    })
  }
})