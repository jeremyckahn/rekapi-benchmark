var r = require('../lib/r.js');
r.config({
  paths: {
    shifty: '../lib/shifty',
    underscore: '../lib/underscore',
    rekapi: '../lib/rekapi'
  }
});

r(['rekapi'], function(Kapi) {
  var kapi = new Kapi();
});

console.log('123');
