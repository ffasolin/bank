describe('Atm', function() {
  var atm;

  it('is defined', function() {
    atm = new Atm;
    expect(atm).toBeDefined();
  });

  it('has a _makeDeposit prototype defined', function() {
    atm = new Atm;
    expect(atm._makeDeposit).toBeDefined();
  });
});
