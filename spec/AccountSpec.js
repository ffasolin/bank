describe('Account', function() {
  var account;

  it('is defined', function() {
    account = new Account;
    expect(account).toBeDefined();
  });

  it('has an initial balance of 0', function() {
    account = new Account;
    expect(account._balance).toBe(0);
  });
});
