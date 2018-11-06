import { createStore } from "redux";

//Action generators return Action objects
// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ count }) => ({
  type: "SET",
  count
});

// Reducers
// Output are determined are inputs
// 1 Reducers are pure functions
// 2 Never change state or action. (Never mutate the state)

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };

    case "RESET":
      return {
        count: 0
      };

    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
};

// Default store
const store = createStore(countReducer);

console.log("101");

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

console.log(store.getState());

store.dispatch(
  incrementCount({
    incrementBy: 5
  })
);

store.dispatch(incrementCount());

store.dispatch(resetCount());

console.log(store.getState());

store.dispatch(decrementCount());

console.log(store.getState());

store.dispatch(setCount({ count: 100 }));

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

// store.dispatch({
//   type: "SET",
//   count: 101
// });

console.log(store.getState());
