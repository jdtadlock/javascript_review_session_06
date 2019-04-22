// var args = process.argv;
// var a = parseInt(args[2]); // Strings
// var b = parseInt(args[3]);

// var sum = a + b;

// console.log(sum);

var search_phrase = process.argv[2];
var api_key = '3K2ZmyEMrXGGyR7EGBGnbti1HZNk2TZL';
var url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search_phrase}&limit=1`;

// var url = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';
var ajax = require('najax');


ajax.get({
  url: url,
  dataType: 'json'
}, function (data) {
  console.log(data);
});


var one = 'Node is awesome!';
var two = 'Node is really awesome!';

module.exports = {
  first: one,
  second: two
};