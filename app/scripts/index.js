/* main js */

//3rd Party
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


//local components
var Interface = require('./components/interface.jsx');
var router = require('./router');
console.log('router is', router);

Backbone.history.start();

//Render Interface
ReactDOM.render(
  React.createElement(Interface, {router: router}),
  document.getElementById('app')
);
