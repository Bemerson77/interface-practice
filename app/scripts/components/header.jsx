//3rd Party
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');


var HeaderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div>
        <button onClick={this.props.navHome}>Home</button>
        <button onClick={this.props.navAbout}>About</button>
        <button onClick={this.props.navContact}>Contact</button>
      </div>
    );
  }
});

module.exports = HeaderComponent;
