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

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortByAmount = (amount = "") => ({
  type: "SORT_BY_AMOUNT",
  amount
});

const sortByDate = (date = "") => ({
  type: "SORT_BY_DATE",
  date
});

const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        amount: action.amount
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        date: action.date
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof startDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text);
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
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
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// const expenseOne = store.dispatch(
//   addExepense({
//     description: "Rent",
//     amount: 10000,
//     createdAt: 1000
//   })
// );

// const expenseTwo = store.dispatch(
//   addExepense({
//     description: "Test",
//     amount: 1000,
//     createdAt: 1000
//   })
// );
