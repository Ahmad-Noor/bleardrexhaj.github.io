class Bank {
    constructor(){
    	 this.Account = [];
    	 this.Number = 0;
    }
    addAccount() {
        this.Account.push(new Account(this.Number));
        this.Number++;
    }
    addSavingsAccount(interest) {
        this.Account.push(new SavingsAccount(interest, this.Number));
        this.Number++;
    }
    addCheckingAccount(overdraft) {
        this.Account.push(new CheckingAccount(overdraft, this.Number));
        this.Number++;
    }
    closeAccount(number) {
    	this.Account = this.Account.filter(x => x.Number === number);
    }
    accountReport(){
    	let str="";
    	this.Account.forEach(x => str+=x.toString()+"\n");
    	return str;
    }
}