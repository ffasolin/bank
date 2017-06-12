# Bank

### A program modelling the functionality of a bank
* User is able to make deposit
* User is able to make withdrawal
* Program allows user to print full statement in reverse order
by most recent transaction
* Full statement displays date, amount in transaction and final balance

## To get started:
(Please ensure npm and node are installed before running)
```
$ npm install
```

## To run tests:
```
$ jasmine
```
## Example in node:
```
> var receipt = new StatementPrinter;
undefined
> var atm = new Atm();
undefined
> atm._makeDeposit(1000);
1
> atm._makeDeposit(2000);
2
> atm._makeWithdrawal(500);
1
> receipt.depositsStatement(atm._deposits);
undefined
> receipt.withdrawalsStatement(atm._withdrawals);
undefined
> receipt.fullStatement();
date || credit || debit || balance
12/06/2017 || 500 || || 2500
12/06/2017 || || 2000 || 3000
12/06/2017 || || 1000 || 1000
undefined
```
