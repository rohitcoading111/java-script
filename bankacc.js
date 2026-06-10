class BankAccount {
    constructor(name, balance = 0) {
        this.name = name;
        this.balance = balance;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }

        this.balance += amount;
        this.transactions.push(`Deposited ₹${amount}`);
        console.log(`₹${amount} deposited successfully`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= amount;
        this.transactions.push(`Withdrawn ₹${amount}`);
        console.log(`₹${amount} withdrawn successfully`);
    }

    checkBalance() {
        console.log(`Current Balance: ₹${this.balance}`);
    }

    transactionHistory() {
        console.log("\nTransaction History:");
        this.transactions.forEach((transaction, index) => {
            console.log(`${index + 1}. ${transaction}`);
        });
    }
}

const account = new BankAccount("Rohit", 1000);

account.checkBalance();

account.deposit(500);

account.withdraw(300);

account.checkBalance();

account.transactionHistory();