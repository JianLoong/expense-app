import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseDashboardPage = props => (
  <div className="">
    <div className="alert alert-primary">
      <div className="">
        <h3>Expenses Summary</h3>
      </div>
      <hr />
      <div className="">
        <ExpenseSummary />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6">
        <ExpenseListFilters />
      </div>
      <div className="col-12 col-md-6">
        <ExpenseList />
      </div>
    </div>
  </div>
);

export default ExpenseDashboardPage;
