var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var ContactComponent = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Contact</h2>
        <h3>Oldschool Brick Phone</h3>
        <h4>sms text message</h4>
      </div>
    );
  }
});

module.exports = ContactComponent;
