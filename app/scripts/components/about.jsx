var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AboutComponent = React.createClass({
  render: function(){
    return (
      <div>
        <h2>About</h2>
        <h3>I'm a Musician</h3>
      </div>
    );
  }
});

module.exports = AboutComponent;
