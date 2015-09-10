var romanNumerals = function(input) {
  var I = 1;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;

  var result = "";

  for(var i = 0; i < input; i++) {
    result = result + "I";
  }
  return result;
}
