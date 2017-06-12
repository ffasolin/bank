describe('Atm', function() {
  var atm;
  var account;

  beforeEach(function() {
    atm = new Atm();
  });

  it('is defined', function() {
    expect(atm).toBeDefined();
  });

  it('has a _makeDeposit prototype defined', function() {
    expect(atm._makeDeposit).toBeDefined();
  });

  it('makes a deposit to an account', function() {
    account = new Account;
    atm._makeDeposit(500);
    expect(atm._balance).toBe(500);
  });
});
