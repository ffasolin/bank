const Atm = require('../src/Atm.js');
const Account = require('../src/Account.js')

describe('Atm', function() {
  var atm;
  var account;

  beforeEach(function() {
    atm = new Atm();
  });

  it('is defined', function() {
    expect(atm).toBeDefined();
  });

  describe('_makeDeposit', function() {
    it('has a _makeDeposit prototype defined', function() {
      expect(atm._makeDeposit).toBeDefined();
    });

    it('makes a deposit to an account', function() {
      account = new Account;
      atm._makeDeposit(500);
      expect(atm._balance).toBe(500);
    });
  });

  describe('_makeWithdrawal', function() {
    it('has a _makeWithdrawal prototype defined', function() {
      expect(atm._makeWithdrawal).toBeDefined();
    });

    it('withdraws money from account', function() {
      account = new Account;
      atm._makeWithdrawal(500);
      expect(atm._balance).toBe(-500);
    });
  });
});
