"use strict";

function init(obj, parent) {
    obj.prototype = Object.create(parent.prototype);
    obj.prototype.constructor = obj;
    obj.prototype._super = parent;
}

function Account(accountNumber) {
    console.log("base constructor");
    this.accountNumber = accountNumber;
    this.balance = 0;
}

Account.prototype.deposit = function(amt) {
    console.log("made a deposit");
    this.balance += amt;
}

function CheckingAccount(accountNumber) {
    CheckingAccount.prototype._super.call(this, accountNumber);
}

init(CheckingAccount, Account);

//CheckingAccount.prototype = Object.create(Account.prototype);
//CheckingAccount.prototype.constructor = CheckingAccount;
//CheckingAccount.prototype._super = Account;
CheckingAccount.prototype.writeCheck = function() {

};

function SavingsAccount() { }
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

var ca = new CheckingAccount("11111");
ca.deposit(100);
console.dir(ca);

var ca2 = new CheckingAccount("22222");
ca2.deposit(200);
console.dir(ca2);

console.log(CheckingAccount instanceof Function);
