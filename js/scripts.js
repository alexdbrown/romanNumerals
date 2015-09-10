var romanNumerals = function(input) {

  var symbols = [["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10], ["XL", 40],
  ["L", 50], ["XC", 90], ["C", 100], ["CD", 400], ["D", 500], ["DM", 900], ["M", 1000]];
  var result = "";
  var inputTracker = input;

  for(var i = symbols.length - 1; i >= 0; i--) {
    var floor = Math.floor(inputTracker / symbols[i][1]);
    if (inputTracker != 0) {
      result += symbols[i][0].repeat(floor);
      inputTracker -= floor * symbols[i][1];
    }

  }



  return result;
};
