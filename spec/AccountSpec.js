describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account;
  });

  it('is defined', function() {
    expect(account).toBeDefined();
  });

  it('has a balance', function() {
    expect(account._currentBalance).toBe(0);
  });

  it('is able to update to current balance', function() {
    var account = new Account(500);
    expect(account._currentBalance).toBe(500);
  });
});
