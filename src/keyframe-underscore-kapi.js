var r = require('../lib/r.js');
var keyframeBenchmark = require('./keyframe-benchmark.js');

r.config({
  paths: {
    shifty: '../lib/shifty',
    underscore: '../lib/underscore',
    rekapi: '../lib/rekapi'
  }
});

r(['rekapi'], function(Kapi) {
  console.log('\n*** REKAPI WITH UNDERSCORE LOADED ***');
  keyframeBenchmark(Kapi);
});
