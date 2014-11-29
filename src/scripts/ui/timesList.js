/** @jsx React.DOM */

var React = require('react');
var Time = require('./time');

module.exports = React.createClass({
  render: function() {
    var timesNodes = this.props.data.map((time, i) => {
      return (
        <Time key={i} time={time} />
      );
    });
    return (
      <div className="sidebar">
        {timesNodes}
      </div>
    );
  }
});