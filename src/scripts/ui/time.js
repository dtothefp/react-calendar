/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var divStyle = {};

    return (
      <div className="time-cont">
        <div style={divStyle}>{this.props.time}</div>
      </div>
    );
  }
});