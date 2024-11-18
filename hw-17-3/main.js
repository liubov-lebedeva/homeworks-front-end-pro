class bankAccount {
    constructor(balance) {
        this.balance = balance;
    }


    getBalance() {
        return this.balance;
    }


    deposit(amount) {
        this.balance += amount;
    }


    withdraw(amount) {
        amount > this.balance ? console.warn("Insufficient funds.") : (this.balance -= amount);
    }
}