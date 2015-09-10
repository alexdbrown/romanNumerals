var romanNumerals = function(input) {

  var symbols = [["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]];
  var result = "";

  for(var i = symbols.length - 1; i >= 0; i--) {

    if(input % symbols[i][1] === 0) {
      var numberOfTimesDivisible = input /symbols[i][1];
      result += symbols[i][0].repeat(numberOfTimesDivisible);
      break;
    }

  }
  return result;
};
