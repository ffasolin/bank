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
    expect(receipt.header()).toBe('date || credit || debit || balance');
  });

  it('prints full current statement', function() {
    receipt = new StatementPrinter;
    atm = new Atm();
    atm._makeDeposit(1000);
    atm._makeDeposit(2000);
    atm._makeWithdrawal(500);
    console.log = jasmine.createSpy("log");
    receipt.fullStatement(atm._deposits, atm._withdrawals);
    expect(console.log).toHaveBeenCalledWith('12/06/2017 || || 1000 || 1000');
    expect(console.log).toHaveBeenCalledWith('12/06/2017 || || 2000 || 3000');
    expect(console.log).toHaveBeenCalledWith('12/06/2017 || 500 || || 2500');
  });
});
