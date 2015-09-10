describe("romanNumerals", function() {
  it("takes 1 and prints I", function() {
    expect(romanNumerals(1)).to.equal("I");
  });

  it("takes 3 and prints III", function() {
    expect(romanNumerals(3)).to.equal("III");
  });
});
