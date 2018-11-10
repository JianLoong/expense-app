import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'bootstrap';

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 2000, createdAt: 1 }));

store.dispatch(addExpense({ description: "Rent", amount: 20000, createdAt: 2 }));

store.dispatch(addExpense({ description: "Gas Bill", createdAt: 3 }));

store.dispatch(setTextFilter(""));

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 3000);

console.log(store.getState());

const state = store.getState();

const expenses = getVisibleExpenses(state.expenses, state.filters);

console.log(expenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
