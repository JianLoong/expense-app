import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <div className="container card border-primary">
    <h3 className="card-header">Expense List</h3>
    <div className="card-body">
    {!props.expense && <p>No expenses</p>}
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
