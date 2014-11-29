
var Map = require('immutable').Map
var Reactor = require('nuclear-js').Reactor
var Store = require('nuclear-js').Store
var timesStore = require('./state/times')
var itemStore = require('./state/items')

module.exports = Reactor({
  stores: {
    times: timesStore,
    items: itemStore
  }
})
