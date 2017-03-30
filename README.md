# Week 10 (LIRI Bot) Homework

Like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Use:
From CLI: liri.js (function) (argument) (argument)

* functions / arguments:
	* my-tweets - no argument needed 
	* spotify-this-song (Song Title)
	* movie-this (Movie Title)
	* do-what-it-says - no argument needed

##

### Node packages used in this project
Node packages used in this project:

 * Twitter
 * Spotify
 * Request
 * fs
 
 All of these npm's are included in the package.json install
### Twitter mods to code to ensure functionality 
You will need to input  the following Twitter id's in the key.txt file: 

 * consumer key
 * conssumer secret
 * access token
 * access secret
 
In the liri.js file find twitterCall function and replace "@userTwitterId" with a user id you would like to search for."my-tweets" will not function until this info is provided


This is [on GitHub](https://github.com/jjm552/liri-node-app) so let me know if I've b0rked it somewhere.



### Stuff used to make this:

 * [twitter npm](https://www.npmjs.com/package/twitter) An asynchronous client library for the Twitter REST and Streaming API's.
 * [Spotify npm](https://www.npmjs.com/package/spotify) Extremely simple (and somewhat hackish) API library for the Spotify REST API.
 * [request npm](https://www.npmjs.com/package/request) Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
 * [OMDB API](http://www.omdbapi.com/) The OMDb API is a free web service to obtain movie information, all content and images on the site are contributed and maintained by our users. 
