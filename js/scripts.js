function BankLedger(){
  this.currentId = 0;
  this.accounts = {};
}

BankLedger.prototype.addAccount = function(bankAccount){
  this.accounts[this.currentId] = bankAccount;
  bankAccount.id = this.currentId;
  this.currentId++;
}

function BankAccount(name, initialDeposit){
  //declare bank account object
  this.name = name;
  this.id = 0;
  this.funds = initialDeposit;
}

BankAccount.prototype.depositFunds = function(depositAmount){
  this.funds += depositAmount;
}

BankAccount.prototype.withdrawFunds = function(withdrawlAmount){
  if (this.funds >= withdrawlAmount){
    this.funds -= withdrawlAmount;
    return true; //return trues if it works
  } else {
    return false; //returns false if it fails
  }
}

BankAccount.prototype.getBalance = function(){
  return this.funds;
}

