var SnapkiteStreamClient = require('snapkite-stream-client');
var TweetActionCreators = require('../actions/TweetActionCreators');

function initializedStreamOfTweets() {
	SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
}

module.exports = {
	initializedStreamOfTweets: initializedStreamOfTweets
};