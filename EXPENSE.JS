const expenses = [];

function addExpense(title, amount) {
  expenses.push({ title, amount });
}

function totalExpense() {
  return expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
}

addExpense("Food", 200);
addExpense("Travel", 100);
addExpense("Recharge", 300);

console.log("Total =", totalExpense());