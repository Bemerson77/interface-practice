
//3rd Party
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var Header = require('./header.jsx');
var About = require('./about.jsx');
var Contact = require('./contact.jsx');
var Home = require('./home.jsx');


var InterfaceComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      user: null,
      router: this.props.router
    }
  },
  componentWillMount: function(){
    this.callback = (function(){
     this.forceUpdate();
    }).bind(this);
    this.state.router.on('route', this.callback);
  },
  componentWillUnmount: function(){
    this.state.router.off('route', this.callback);
  },
  navHome: function(){
    Backbone.history.navigate('', {trigger: true});
  },
  navAbout: function(){
    Backbone.history.navigate('about', {trigger: true});
  },
  navContact: function(){
    Backbone.history.navigate('contact', {trigger: true});
  },
  render: function(){
    var currentRoute;
    var routing = this.props.router;
    if (routing.current == 'home'){
      currentRoute = <Home />
    }else if (routing.current == 'about') {
      currentRoute = <About />
    }else if (routing.current == 'contact') {
      currentRoute = <Contact />
    }
    return (
      <div>
        <Header
          navHome={this.navHome}
          navAbout={this.navAbout}
          navContact={this.navContact}
        />
        {currentRoute}
      </div>
    );
  }
});

module.exports = InterfaceComponent;
