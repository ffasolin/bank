describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account;
  });

  it('is defined', function() {
    expect(account).toBeDefined();
  });

  it('has an initial balance of 0', function() {
    expect(account._balance).toBe(0);
  });
});
