// twitter,spotify & require NPM packages
var twitter = require("twitter");
var keys = require("./keys.js");
var spotify = require("spotify");
var request = require("request");
var fs = require("fs");

// Taking in command line arguments
var nodeArgs = process.argv;

// twitter option
if (nodeArgs[2] == "my-tweets") {
    var client = new twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret
    });
    var params = {
        screen_name: '@mcmahan_jeff2',
        count: '20'
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log("My last 20 tweets!:")
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text + tweets[i].created_at);
            }
        }
    });

    // spotify option
} else if (nodeArgs[2] == "spotify-this-song") {
    var song = nodeArgs[3];
    console.log("SPOTIFY!" + song);

    // omdb option
} else if (nodeArgs[2] == "movie-this") {
    var movie = nodeArgs[3];
    console.log("OMDB!" + movie);

    // do what it says option
} else if (nodeArgs[2] == "do-what-it-says") {
    console.log("FS THIS!");
}