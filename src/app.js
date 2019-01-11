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
import moment from "moment";

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 21400, createdAt: moment() }));

store.dispatch(addExpense({ description: "Rent", amount: 20000, createdAt: 1541903938000 }));

store.dispatch(addExpense({ description: "Gas Bill", amount: 13200, createdAt: 1541903938000 }));

store.dispatch(setTextFilter(""));

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
