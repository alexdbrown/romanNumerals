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

  // it("takes 4 and prints IV", function() {
  //   expect(romanNumerals(4)).to.equal("IV");
  // });


});
