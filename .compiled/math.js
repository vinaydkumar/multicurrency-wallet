// Generated by LiveScript 1.5.0
(function(){
  var big, ref$, map, pairsToObj, math;
  big = require('big.js');
  ref$ = require('prelude-ls'), map = ref$.map, pairsToObj = ref$.pairsToObj;
  math = function($){
    return function(x, y){
      var err;
      try {
        return new big(x)[$](y).toString();
      } catch (e$) {
        err = e$;
        throw x + " " + $ + " " + y + " = " + err;
      }
    };
  };
  module.exports = pairsToObj(
  map(function(it){
    return [it, math(it)];
  })(
  ['plus', 'minus', 'times', 'div']));
}).call(this);