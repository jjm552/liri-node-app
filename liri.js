//----------------------------------------------------------------------------------
// twitter,spotify,require & fs NPM packages
//----------------------------------------------------------------------------------
var twitter = require("twitter");
var keys = require("./keys.js");
var spotify = require("spotify");
var request = require("request");
var fs = require("fs");
var randomTXT = ("./random.txt");

//----------------------------------------------------------------------------------
// Taking in command line arguments
//----------------------------------------------------------------------------------
var nodeArgs = process.argv;
var userInput = "";
for (var i = 3; i < nodeArgs.length; i++) {
    userInput = userInput + " " + nodeArgs[i];
}
if (nodeArgs[2] == "my-tweets") {
    twitterCall(twitter, keys);
} else if (nodeArgs[2] == "spotify-this-song") {
    spotifyCall(userInput, spotify);
} else if (nodeArgs[2] == "movie-this") {
    omdbCall(userInput, request, fs);
} else if (nodeArgs[2] == "do-what-it-says") {
    doWhatItSays();
}

//----------------------------------------------------------------------------------
// twitter option
//----------------------------------------------------------------------------------
function twitterCall(twitter, keys) {
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
            console.log("My last 20 tweets!:");
            fs.appendFile("log.txt", ("***my-tweets function called***") + "\n");
            fs.appendFile("log.txt", ("My last 20 tweets!:") + "\n");
            console.log("-------------------------------------------------------");
            fs.appendFile("log.txt", ("-------------------------------------------------------") + "\n");
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text + tweets[i].created_at);
                fs.appendFile("log.txt", (tweets[i].text + tweets[i].created_at) + "\n");
                console.log("-------------------------------------------------------");
                fs.appendFile("log.txt", ("-------------------------------------------------------") + "\n");
            }
        }
    });
}

//-----------------------------------------------------------------------------------
// spotify option
//-----------------------------------------------------------------------------------
function spotifyCall(userInput, spotify) {
    var song = userInput;
    if (song === "") {
        var song = "Ace of Base The Sign";
    }
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        // used to write spotify data to a txt file for ease of parsing info for console.logs
        // fs.writeFile("spotifyTemp.txt", JSON.stringify(data, null, 2));
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        fs.appendFile("log.txt", ("***spotify-this-song function called***") + "\n");
        fs.appendFile("log.txt", ("Artist: " + data.tracks.items[0].artists[0].name) + "\n");
        console.log("Track Name: " + data.tracks.items[0].name);
        fs.appendFile("log.txt", ("Track Name: " + data.tracks.items[0].name) + "\n");
        console.log("Spotify preview URL: " + data.tracks.items[0].preview_url);
        fs.appendFile("log.txt", ("Spotify preview URL: " + data.tracks.items[0].preview_url) + "\n");
        console.log("Album title: " + data.tracks.items[0].album.name);
        fs.appendFile("log.txt", ("Album title: " + data.tracks.items[0].album.name) + "\n");
    });
}

// ---------------------------------------------------------------------------------
// omdb option
//----------------------------------------------------------------------------------
function omdbCall(userInput, request, fs) {
    var movie = userInput.trim();
    console.log(movie);
    if (movie === "") {
        var movie = "Mr.+Nobody";
    }
    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&tomatoes=true&r=json", function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("Movie Title: " + JSON.parse(body).Title);
            fs.appendFile("log.txt", ("***movie-this function called***") + "\n");
            fs.appendFile("log.txt", ("Movie Title: " + JSON.parse(body).Title) + "\n");
            console.log("Release date: " + JSON.parse(body).Released);
            fs.appendFile("log.txt", ("Release date: " + JSON.parse(body).Released) + "\n");
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            fs.appendFile("log.txt", ("IMDB Rating: " + JSON.parse(body).imdbRating) + "\n");
            console.log("Country: " + JSON.parse(body).Country);
            fs.appendFile("log.txt", ("Country: " + JSON.parse(body).Country) + "\n");
            console.log("Language: " + JSON.parse(body).Language);
            fs.appendFile("log.txt", ("Language: " + JSON.parse(body).Language) + "\n");
            console.log("-------------------------------------------------------");
            fs.appendFile("log.txt", ("-------------------------------------------------------") + "\n");
            console.log("Plot: " + JSON.parse(body).Plot);
            fs.appendFile("log.txt", ("Plot: " + JSON.parse(body).Plot) + "\n");
            console.log("-------------------------------------------------------");
            fs.appendFile("log.txt", ("-------------------------------------------------------") + "\n");
            console.log("Actors: " + JSON.parse(body).Actors);
            fs.appendFile("log.txt", ("Actors: " + JSON.parse(body).Actors) + "\n");
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            fs.appendFile("log.txt", ("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value) + "\n");
            console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
            fs.appendFile("log.txt", ("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL) + "\n");
        }
    });
}

//----------------------------------------------------------------------------------
// do what it says option
//----------------------------------------------------------------------------------
function doWhatItSays(randomTXT) {
    fs.readFile("random.txt", "utf8", function(error, data) {
        console.log(data);
        var dataArr = data.split(",");
        console.log(dataArr[1]);
        if (dataArr[0] == "my-tweets") {
            twitterCall(twitter);
        } else if (dataArr[0] == "spotify-this-song") {
            spotifyCall(dataArr[1], spotify);
        } else if (dataArr[0] == "movie-this") {
            omdbCall(dataArr[1], request, fs);
        }
    });
}