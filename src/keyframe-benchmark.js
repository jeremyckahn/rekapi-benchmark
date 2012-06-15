function now () {
  return +(new Date());
}

var TIMES_TO_ADD_KEYFRAMES = 250;

module.exports = function (Kapi) {
  var kapi = new Kapi();
  var actor =  new Kapi.Actor();
  kapi.addActor(actor);
  var startTime = now();

  var i;
  for (i = 0; i < TIMES_TO_ADD_KEYFRAMES; i++) {
    actor.keyframe(i, { x: 1 });
  }

  var endTime = now();
  var timeElapsed = endTime - startTime;
  console.log('Finished in ' + timeElapsed + ' ms, added ' +
      TIMES_TO_ADD_KEYFRAMES + ' keyframes');
};
