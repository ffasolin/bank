function Atm(balance = 0) {
  this._balance = balance;
  this._deposits = [];
  this._withdrawals = [];
}

Atm.prototype._makeDeposit = function(amount) {
  return this._balance += amount;
}

Atm.prototype._makeWithdrawal = function(amount) {
  return this._balance -= amount;
}

module.exports = Atm;
