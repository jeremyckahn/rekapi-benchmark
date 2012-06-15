var r = require('../lib/r.js');
var keyframeBenchmark = require('./keyframe-benchmark.js');

r.config({
  paths: {
    shifty: '../lib/shifty',
    underscore: '../lib/lodash',
    rekapi: '../lib/rekapi'
  }
});

r(['rekapi'], function(Kapi) {
  keyframeBenchmark(Kapi);
});