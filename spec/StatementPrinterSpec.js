const StatementPrinter = require('../src/StatementPrinter.js');

describe('StatementPrinter', function() {
  var receipt;

  it('is defined', function() {
    expect(StatementPrinter).toBeDefined();
  });

  it('returns a header', function() {
    receipt = new StatementPrinter;
    expect(receipt.header()).toBe('date || credit || debit || balance');
  });
});
