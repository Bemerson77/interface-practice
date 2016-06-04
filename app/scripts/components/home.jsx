var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');



var HomeComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div>
        <h2>Home</h2>
        <img className="home-headshot" src="../dist/images/jr-headshot.jpg" />
      </div>
    );
  }
});

module.exports = HomeComponent;
