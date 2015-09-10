describe("romanNumerals", function() {
  it("takes 1 and prints I", function() {
    expect(romanNumerals(1)).to.equal("I");
  });

  it("takes 3 and prints III", function() {
    expect(romanNumerals(3)).to.equal("III");
  });

  it("takes 1000 and prints M", function() {
    expect(romanNumerals(1000)).to.equal("M");
  });

   it("takes 6 and prints VI", function() {
     expect(romanNumerals(6)).to.equal("VI");
   });

   it("takes 87 and prints LXXXVII", function() {
     expect(romanNumerals(87)).to.equal("LXXXVII");
   });

  it("takes 4 and prints IV", function() {
    expect(romanNumerals(4)).to.equal("IV");
  });

  it("takes 9 and prints IX", function() {
    expect(romanNumerals(9)).to.equal("IX");
  });

  it("takes 19 a and prints XIX", function() {
    expect(romanNumerals(19)).to.equal("XIX");
  });

  it("takes 3999 a and prints XIX", function() {
    expect(romanNumerals(3999)).to.equal("MMMCMXCIX");
  });

});
