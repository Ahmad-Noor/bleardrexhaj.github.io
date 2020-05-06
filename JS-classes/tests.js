let savingsAccount = new SavingsAccount(12,1);
let checkingAccount = new CheckingAccount(3000,2);
let bank = new Bank();

describe('Savings Account', function() {
  describe('Deposit', function() {
    it('savings account balance should return 9000 after deposit', function() {
      savingsAccount.deposit(9000);
      assert.equal(savingsAccount.getBalance(), 9000);
    });
  });
});

describe('Savings Account', function() {
  describe('Interest', function() {
    it('savings account balance should return 7920 after 12% interest appliance', function() {
      savingsAccount.addInterest();
      assert.equal(savingsAccount.getBalance(), 7920);
    });
  });
}); 

describe('Overdraft Account', function() {
  describe('Allowed Overdraft', function() {
    it('Overdraft balance should be 3000 after declaring it so', function() {
      assert.equal(checkingAccount.getOverdraft(), 3000);
    });
  });
}); 

describe('Overdraft Account', function() {
  describe('Withdraw method', function() {
    it('Overdraft balance should be 2100 after withdrawing 900', function() {
      checkingAccount.withdraw(900);
      assert.equal(checkingAccount.getOverdraft(), 2100);
    });
  });
}); 

describe('Bank Class', function() {
  describe('AddAccount', function() {
    it('Should print all accounts', function() {
      bank.addAccount();
      assert.equal(bank.accountReport(), 'Account 0: balance 0\nSavingsAccount 1: balance 0 Interest 2\n');
    });
  });
}); 