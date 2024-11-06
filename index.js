const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];
// Part 1 Transaction Analysis

//const income = transactions.filter((["income", 1000]) => ["income", 1000][0] == "income");

// Task 1
const income = transactions.filter((transaction) => transaction[0] == "income");

console.log(income);
// Task2
const expense = transactions.filter(
  (transaction) => transaction[0] == "expense"
);
console.log(expense);

// Part 2 Financial Summary
