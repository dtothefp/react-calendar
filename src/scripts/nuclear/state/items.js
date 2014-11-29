var Map = require('immutable').Map;
var Store = require('nuclear-js').Store;

module.exports = Store({
  getInitialState: function() {
    return []
  },

  initialize: function() {
    this.on('addItem', function(percent, value) {
      return state.push(Map({
        item: payload.item
      }))
    })
  }
})