import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

const usubscribe = store.subscribe(() => {
  console.log("state changed", store.getState());
});

// console.log(store.getState());

store.dispatch(actions.bugAdded("bug 01"));
// console.log(store.getState());
// usubscribe();
store.dispatch(actions.bugAdded("bug 02"));
store.dispatch(actions.bugRemoved(1));
// console.log(store.getState());
store.dispatch(actions.bugResolved(2));
