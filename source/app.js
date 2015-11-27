var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');
var WebAPIUtils = require('./utils/WebAPIUtils');

WebAPIUtils.initializedStreamOfTweets();

ReactDOM.render(<Application />, document.getElementById('react-application'));