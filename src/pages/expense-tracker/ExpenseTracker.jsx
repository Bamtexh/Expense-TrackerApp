import React from "react";

export const ExpenseTracker = () => {
  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1>Expense Tracker</h1>
          <div className="balance">
            <h3>Your Balance</h3>
            <h2>$0.00</h2>
          </div>
          <div className="summary">
            <div className="income">
              <h4>income</h4>
              <p>$0.00</p>
            </div>
            <div className="expenses">
              <h4>Expense</h4>
              <p>$0.00</p>
            </div>
          </div>
          <form action="" className="add-transaction">
            <input type="text" placeholder="Description" required />
            <input type="number" placeholder="Amount" required />
            <input type="radio" id="expense" value="expense" />
            <label htmlFor="expense">Expenses</label>
            <input type="radio" id="income" value="income" />
            <label htmlFor="income">Income</label>
            <button type="submit">Add Transactions</button>
          </form>
        </div>
      </div>
      <div className="transactions">
        <h3>Transactions</h3>
      </div>
    </>
  );
};

export default ExpenseTracker;
