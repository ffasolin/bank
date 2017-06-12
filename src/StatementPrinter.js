function StatementPrinter() {}

StatementPrinter.prototype.header = function() {
  console.log('date || credit || debit || balance');
};

StatementPrinter.prototype.fullStatement = function(deposits, withdrawals) {
  this.header();
  this.depositsStatement(deposits.reverse());
  this.withdrawalsStatement(withdrawals.reverse());
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
