This serves as a very simple (dumb) performance benchmark for
[Rekapi](https://github.com/jeremyckahn/rekapi) when using
[Underscore](https://github.com/documentcloud/underscore) versus
[Lo-Dash](https://github.com/bestiejs/lodash).  Rekapi depends on an
Underscore-like utility library, and is compatible with both Underscore proper
and Lo-Dash.

Please note that this benchmark requires
[Node](https://github.com/joyent/node).

__Directions:__ Execute this in a BASH session to run the benchmark for both
the Underscore and Lo-Dash versions of Rekapi:

````
cd src/
sh run-keyframe-benchmarks.sh
````

Here is the output for a 2.13 GHz MacBook Air:

````
*** REKAPI WITH UNDERSCORE LOADED ***
Finished in 1213 ms, added 250 keyframes

*** REKAPI WITH LODASH LOADED ***
Finished in 766 ms, added 250 keyframes
````
