/** @jsx React.DOM */

var React = require('react')
var ReactorMixin = require('nuclear-react-mixin')
var reactor = require('../nuclear/reactor')
var Getter = require('nuclear-js').Getter
var TimesList = require('./timesList')

var Calendar = React.createClass({
  mixins: [ReactorMixin(reactor)],
 
  getDataBindings() {
    return {
      times: 'times',
      items: ['items']
    }
  },

  render() {
    var times = this.state.times.toJS();
    return (
      <div className="container">
        <TimesList data={times} />
      </div>
    );
  }
});

module.exports = Calendar;
