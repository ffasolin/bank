const StatementPrinter = require('../src/StatementPrinter.js');
const Atm = require('../src/Atm.js');

describe('StatementPrinter', function() {
  var receipt;
  var atm;

  it('is defined', function() {
    expect(StatementPrinter).toBeDefined();
  });

  it('returns a header', function() {
    receipt = new StatementPrinter;
    console.log = jasmine.createSpy('log');
    receipt.header();
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });

  it('prints current statement fully in reverse order', function() {
    receipt = new StatementPrinter;
    atm = new Atm();
    atm._makeDeposit(1000);
    atm._makeDeposit(2000);
    atm._makeWithdrawal(500);
    receipt.depositsStatement(atm._deposits);
    receipt.withdrawalsStatement(atm._withdrawals);
    console.log = jasmine.createSpy('log');
    receipt.fullStatement();
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
    expect(console.log).toHaveBeenCalledWith('12/06/2017 || 500 || || 2500');
    expect(console.log).toHaveBeenCalledWith('12/06/2017 || || 2000 || 3000');
    expect(console.log).toHaveBeenCalledWith('12/06/2017 || || 1000 || 1000');
  });
});
