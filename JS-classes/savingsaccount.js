"use strict";
/**
 * A SavingsAccount child class
 * 
 * Extends the Account in order to include the interest
 */
class SavingsAccount extends Account {
    /**
     * Constructor for creating a new SavingsAccount object
     * 
     * @param {number} interest the interest for this account
     */
    constructor(interest, number) {
        super(number);
        this._interest = interest;
    }
    /**
     * Accessor for the 'private' interest field
     * 
     * @returns {number} interest for this account
     */
    getInterest() {
        return this._interest;
    }
    /**
     * Method to set interest into the account
     * 
     * @param {number} interest percentage to be set into the account 
     */
    setInterest(interest) {
        this._interest = interest;
    }
    /**
     * Method to add interest into the account
     * 
     */
    addInterest() {
        super.withdraw((super.getBalance() * this._interest / 100));
    }
    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "SavingsAccount " + super.getNumber() + ": balance " + super.getBalance() + " Interest " + this._interest;
    }
    /**
     * Method for updating the values at the end of the month.
     */
    endOfMonth() {
        this.addInterest();
        return this.getInterest();
    }
}