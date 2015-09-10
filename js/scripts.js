var romanNumerals = function(input) {

  var symbols = [["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10], ["XL", 40],
  ["L", 50], ["XC", 90], ["C", 100], ["CD", 400], ["D", 500], ["CM", 900], ["M", 1000]];
  var result = "";
  var inputTracker = input;

  if (input < 1 || input > 3999) {
    result = "Nope. Try again";
    return result;
  }

  for(var i = symbols.length - 1; i >= 0; i--) {
    var floor = Math.floor(inputTracker / symbols[i][1]);
    if (inputTracker != 0) {
      result += symbols[i][0].repeat(floor);
      inputTracker -= floor * symbols[i][1];
    }
  }
  return result;
};

$(document).ready(function() {

  $("form#roman-numerals").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = romanNumerals(number);
    if (result === "Nope. Try again") {
      alert(result);
    } else {
      $(".number").text(number);

      $(".results").text(result);

      $("#result").show();
      event.preventDefault();
    }
  });
});
