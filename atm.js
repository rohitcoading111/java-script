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

function atm(choice, amount = 0) {
    switch (choice) {
        case 1:
            checkBalance();
            break;

        case 2:
            deposit(amount);
            break;

        case 3:
            withdraw(amount);
            break;

        case 4:
            console.log("Thank You for Using Our ATM!");
            break;

        default:
            console.log("Invalid Choice!");
    }
}


atm(1);          // Check Balance

atm(2, 2000);    // Deposit ₹2000

atm(3, 1500);    // Withdraw ₹1500

atm(3, 10000);   // Insufficient Balance

atm(1);          // Check Updated Balance

atm(4);          // Exit