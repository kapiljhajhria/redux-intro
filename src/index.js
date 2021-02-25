import store from "./store";

const usubscribe = store.subscribe(() => {
  console.log("state changed", store.getState());
});

// console.log(store.getState());

store.dispatch({
  type: "BUG_ADDED",
  payload: { description: "bug 01" },
});
// console.log(store.getState());
usubscribe();
store.dispatch({
  type: "BUG_REMOVED",
  payload: { id: 1 },
});
// console.log(store.getState());
