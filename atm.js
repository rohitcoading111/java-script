let balance = 5000;

function checkBalance() {
    console.log("Your Current Balance is ₹" + balance);
}

function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log("₹" + amount + " Deposited Successfully.");
        console.log("Updated Balance: ₹" + balance);
    } else {
        console.log("Invalid Deposit Amount!");
    }
}

function withdraw(amount) {
    if (amount <= 0) {
        console.log("Invalid Withdraw Amount!");
    } else if (amount > balance) {
        console.log("Insufficient Balance!");
    } else {
        balance -= amount;
        console.log("₹" + amount + " Withdrawn Successfully.");
        console.log("Remaining Balance: ₹" + balance);
    }
}

