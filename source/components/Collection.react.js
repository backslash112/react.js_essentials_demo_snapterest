var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

var Collection = React.createClass({

	createHtmlMarkupStringOfTweetList: function() {
		var htmlString = ReactDOMServer.renderToStaticMarkup(
			<TweetList tweets={this.props.tweets} />
			);
		var htmlMarkup = {
			html: htmlString
		};
		return JSON.stringify(htmlMarkup);
	},

	getListOfTweetIds: function() {
		console.log("Collection - getListOfTweetIds() - this.props.tweets");
		console.log(this.props.tweets);
		
		return Object.keys(this.props.tweets);
	},

	getNumberOfTweetsInCollection: function() {
		return this.getListOfTweetIds().length;
	},

	render: function() {
		var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

		if (numberOfTweetsInCollection > 0) {
			var tweets = this.props.tweets;
			var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
			var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
			var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
			return (
				<div>
					<CollectionControls 
						numberOfTweetsInCollection={numberOfTweetsInCollection}
						htmlMarkup={htmlMarkup}
						onRemoveAllTweetsFromCollection={onRemoveAllTweetsFromCollection} />
					<TweetList 
						tweets={tweets} 
						onRemoveTweetFromCollection={onRemoveTweetFromCollection} />
				</div>
				);
		}
		return <Header text="Your collection is empty" />;
	}
});

module.exports = Collection;