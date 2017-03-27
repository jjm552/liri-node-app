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
    console.log("TWITTER!");
    console.log(keys.twitterKeys.consumer_key);
    var client = new twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        bearer_toke: keys.twitterKeys.access_token_key
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