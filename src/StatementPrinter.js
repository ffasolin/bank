function StatementPrinter() {}

StatementPrinter.prototype.header = function() {
  return 'date || credit || debit || balance';
};

StatementPrinter.prototype.fullStatement = function(deposits, withdrawals) {
  this.depositsStatement(deposits);
  this.withdrawalsStatement(withdrawals);
};

StatementPrinter.prototype.depositsStatement = function(deposits) {
  for (var i = 0; i < deposits.length; i++) {
    console.log(`${deposits[i][0]} || || ${deposits[i][1]} || ${deposits[i][2]}`)
  }
};

StatementPrinter.prototype.withdrawalsStatement = function(withdrawals) {
  for (var i = 0; i < withdrawals.length; i++) {
    console.log(`${withdrawals[i][0]} || ${withdrawals[i][1]} || || ${withdrawals[i][2]}`)
  }
};

module.exports = StatementPrinter;
