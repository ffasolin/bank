const FormatDate = require('../src/FormatDate.js');
const date = new FormatDate;

function Atm(balance = 0) {
  this._balance = balance;
  this._deposits = [];
  this._withdrawals = [];
}

Atm.prototype._makeDeposit = function(amount) {
  this._balance += amount;
  return this._deposits.push([`${date.getStyledDate()}`, `${amount}`, `${this._balance}`]);
}

Atm.prototype._makeWithdrawal = function(amount) {
  return this._balance -= amount;
}

module.exports = Atm;
