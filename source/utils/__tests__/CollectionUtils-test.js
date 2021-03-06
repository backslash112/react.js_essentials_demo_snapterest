// jest.dontMock('../CollectionUtils');
// jest.dontMock('../TweetUtils');   
// alternative to ->
jest.autoMockOff();

describe('Collection utillities module', function() {
	var CollectionUtils = require('../CollectionUtils');
	var React = require('react');

	var collectionTweetMock = {
		collectionTweet7: {},
		collectionTweet8: {},
		collectionTweet9: {}
	};

	it('returns a number of tweets in collection', function getNumberOfTweetsInCollection() {
		var actualNumberOfTweetsInCollection = 
		CollectionUtils.getNumberOfTweetsInCollection(collectionTweetMock);
		var expectedNumberOfTweetsInCollection = 3;

		expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);
	});

	it('checks if collection is not empty', function isNotEmptyCollection() {
		var actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetMock);

		expect(actualIsEmptyCollectionValue).toBeDefined();
		expect(actualIsEmptyCollectionValue).toBe(false);
		expect(actualIsEmptyCollectionValue).not.toBe(true);
	});
});