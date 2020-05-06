/**
 * A Bank class
 * 
 * Provides banking operation for the accounts
 */
class Bank {
	/**
     * Constructor for creating a new Bank object
     */
    constructor(){
    	 this.Account = [];
    	 this.Number = 0;
    }
    /**
     * Constructor for creating a new Account object inside of the array
     */
    addAccount() {
        this.Account.push(new Account(this.Number));
        let tmp = this.Number;
        this.Number++;
        return tmp;
    }
    /**
     * Constructor for creating a new Savings Account object inside of the array
     * @param {number} interest the interest for this account
     */
    addSavingsAccount(interest) {
        this.Account.push(new SavingsAccount(interest, this.Number));
        let tmp = this.Number;
        this.Number++;
        return tmp;
    }
    /**
     * Constructor for creating a new Checking Account object inside of the array
     * @param {number} overdraft for this account
     */
    addCheckingAccount(overdraft) {
        this.Account.push(new CheckingAccount(overdraft, this.Number));
        let tmp = this.Number;
        this.Number++;
        return tmp;
    }
    /**
     * Constructor for closing an Account object inside of the array
     * @param {number} number the number for this account
     */
    closeAccount(number) {
    	this.Account = this.Account.filter(x => x.Number === number);
    }
    /**
     * Constructor for creating a new Savings Account object inside of the array
     */
    accountReport(){
    	let str="";
    	this.Account.forEach(x => str+=x.toString()+"\n");
    	return str;
    }
}