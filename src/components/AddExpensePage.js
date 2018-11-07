import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

const AddExpensePage = props => (
  <div>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpense(expense));
        //Browser routing with push
        props.history.push("/");
      }}
    />
    <p>This is for the add expense page.</p>
  </div>
);

export default connect()(AddExpensePage);
