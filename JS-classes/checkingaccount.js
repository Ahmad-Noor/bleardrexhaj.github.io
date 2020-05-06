"use strict";
/**
 * A CheckingAccount child class
 * 
 * Extends the Account and it includes the overdraft
 */
class CheckingAccount extends Account {
    /**
     * Constructor for creating a new CheckingAccount object
     * 
     * @param {number} overdraft the overdraft for this account
     * @param {number} number the number for this account
     */
    constructor(overdraft, number) {
        super(number);
        this._overdraft = overdraft;
    }
    /**
     * Accessor for the 'private' overdraft field
     * 
     * @returns {number} overdraft for this account
     */
    getOverdraft() {
        return this._overdraft;
    }
    /**
     * Method to set overdraft into the account
     * 
     * @param {number} overdraft to be set into the account 
     */
    setOverdraft(amount) {
        this._overdraft = amount;
    }
    /**
     * Method to take overdraft money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when overdraft is less than or equal to zero
     * @throws {Error} when the account has insufficient overdraft funds (balance)
     */
    withdraw(amount) {
        if (this._overdraft <= 0) {
            throw new RangeError("Overdraft amount has to be greater than zero");
        }
        if (amount > this._overdraft) {
            throw Error("Insufficient funds");
        }
        this._overdraft -= amount;
        super.setBalance(-amount);
    }
    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "CheckingAccount " + super.getNumber() + ": balance " + super.getBalance() + " Overdraft " + this._overdraft;
    }
    /**
     * Method for updating the values at the end of the month.
     */
    endOfMonth() {
        if (super.getBalance() < 0) {
            return "Warning, low CheckingAccount " + super.getNumber() + ": balance: " + super.getBalance() + " overdraft limit: " + this._overdraft;
        }
        return "";
    }
}