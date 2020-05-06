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
    it('Should expect 0 as the first Number of the AddAccount function', function() {
      assert.equal(bank.addAccount(), 0);
    });
  });
});

describe('Bank Class', function() {
  describe('AddSavingsAccount', function() {
    it('Should expect 1 as the second Number of the addSavingsAccount function', function() {
      assert.equal(bank.addSavingsAccount(12), 1);
    });
  });
}); 

describe('Bank Class', function() {
  describe('AddCheckingAccount', function() {
    it('Should expect 2 as the second Number of the AddCheckingAccount function', function() {
      assert.equal(bank.addCheckingAccount(3000), 2);
    });
  });
}); 

describe('Bank Class', function() {
  describe('End of the month', function() {
    it('Should expect Account , SavingsAccount 12, CheckingAccount Warning, low CheckingAccount 2: balance: -900 overdraft limit: 2100, Account , SavingsAccount 2, ', function() {
      (bank.getAccounts())[1].deposit(3000);
      (bank.getAccounts())[2].withdraw(900);
      assert.equal(bank.endOfMonth(), 'Account , SavingsAccount 12, CheckingAccount Warning, low CheckingAccount 2: balance: -900 overdraft limit: 2100, ');
    });
  });
}); 

document.getElementById("timerbtn").addEventListener("click", function(){
  let clock = new Clock("h:m:s");
  clock.start();
});