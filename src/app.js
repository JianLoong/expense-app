import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water" }));

store.dispatch(addExpense({ description: "Gas Bill" }));

store.dispatch(setTextFilter("potato"));

console.log(store.getState());

const state = store.getState();

const expenses = getVisibleExpenses(state.expenses, state.filters);

console.log(expenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
