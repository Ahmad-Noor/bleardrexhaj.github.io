let savingsAccount = new SavingsAccount(12,1);
let checkingAccount = new CheckingAccount(3000,2);

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
      checkingAccount.withdraw(900)
      assert.equal(checkingAccount.getOverdraft(), 2100);
    });
  });
}); 