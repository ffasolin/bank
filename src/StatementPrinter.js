function StatementPrinter() {
  this._transactions = [];
}

StatementPrinter.prototype.header = function() {
  console.log('date || credit || debit || balance');
};

StatementPrinter.prototype.fullStatement = function() {
  this.header();
  this._transactions.reverse();
  for (var i = 0; i < this._transactions.length; i++) {
    console.log(this._transactions[i]);
  }
};

StatementPrinter.prototype.depositsStatement = function(deposits) {
  for (var i = 0; i < deposits.length; i++) {
    this._transactions.push(`${deposits[i][0]} || || ${deposits[i][1]} || ${deposits[i][2]}`);
  }
};

StatementPrinter.prototype.withdrawalsStatement = function(withdrawals) {
  for (var i = 0; i < withdrawals.length; i++) {
    this._transactions.push(`${withdrawals[i][0]} || ${withdrawals[i][1]} || || ${withdrawals[i][2]}`);
  }
};

module.exports = StatementPrinter;
