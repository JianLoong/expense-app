import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <div className="container">
    <h3 className="">Expense List</h3>
    <div className="">
    {props.expenses.length === 0 && <p className="alert alert-warning">No expenses found.</p>}
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
