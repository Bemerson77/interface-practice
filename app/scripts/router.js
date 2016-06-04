var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'about': 'about',
    'contact': 'contact'
  },
  home: function(){
    var self = this;
    self.current = 'home';
  },
  about: function(){
    this.current = 'about';
  },
  contact: function(){
    this.current = 'contact';
  }
});



module.exports = new Router();
