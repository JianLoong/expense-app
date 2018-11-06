import { createStore, combineReducers } from "redux";
import { v1 as uuid } from "uuid";

console.log("Redux Expense");

//Expenses Reducers
const expensesReducerDefaultState = [];

// ... is the ES6 spread function. Simple way to create new objects
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const editExpense = (id, updates) => ({
  type: "EDIT_EXEPENSE",
  updates
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const addExepense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const setTextFilter = () => ({});

// Filter reducer
// Text = empty string
// sortBy date
// startDate - undefined
// endDate - undefined
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const demoState = {
  expenses: [
    {
      id: "dasdad",
      description: "January Rent",
      note: "This was the final shit",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "ammount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// store.subscribe(() => console.log(store.getState()));
store.subscribe(() => console.log(store.getState()));

const expenseOne = store.dispatch(
  addExepense({
    description: "Rent",
    amount: 100
  })
);

store.dispatch(editExpense(expenseOne.expense.id, { amount: 500 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
