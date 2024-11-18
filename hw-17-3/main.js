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


const account1 = new bankAccount(1000);

console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());