const Atm = require('../src/Atm.js');

describe('Atm', function() {
  var atm;

  beforeEach(function() {
    atm = new Atm();
  });

  it('is defined', function() {
    expect(atm).toBeDefined();
  });

  it('has a deposit storage', function() {
    expect(atm._deposits).toEqual([]);
  });

  it('has a withdrawal storage', function() {
    expect(atm._withdrawals).toEqual([]);
  });

  describe('_makeDeposit', function() {
    it('has a _makeDeposit prototype defined', function() {
      expect(atm._makeDeposit).toBeDefined();
    });

    it('makes a deposit to an account', function() {
      atm._makeDeposit(500);
      expect(atm._balance).toBe(500);
    });
  });

  describe('_makeWithdrawal', function() {
    it('has a _makeWithdrawal prototype defined', function() {
      expect(atm._makeWithdrawal).toBeDefined();
    });

    it('withdraws money from account', function() {
      atm._makeWithdrawal(500);
      expect(atm._balance).toBe(-500);
    });
  });
});
