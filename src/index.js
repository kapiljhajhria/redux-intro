// import store from "./store";
// import * as actions from "./actionTypes";
// import { bugAdded, bugRemoved, bugResolved } from "./actionsCreators";
// const usubscribe = store.subscribe(() => {
//   console.log("state changed", store.getState());
// });

// // console.log(store.getState());

// store.dispatch(bugAdded("bug 01"));
// // console.log(store.getState());
// // usubscribe();
// store.dispatch(bugAdded("bug 02"));
// store.dispatch(bugRemoved(1));
// // console.log(store.getState());
// store.dispatch(bugResolved(2));

// import store from "./customeStore";

// store.state = 1;

// // console.log(store.state);
// console.log(store);

import store from "./customeStore";
import * as actions from "./actionsCreators";

store.dispatch(actions.bugAdded("bug 001"));

console.log(store.getState());
