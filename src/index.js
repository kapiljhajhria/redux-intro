import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugsSelector,
} from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

const usubscribe = store.subscribe(() => {
  console.log("state changed", store.getState());
});

// // console.log(store.getState());
store.dispatch(projectAdded({ name: "Porject 02" }));
store.dispatch(bugAdded({ description: "bug 01" }));
// console.log(store.getState());
// usubscribe();
store.dispatch(bugAdded({ description: "bug 02" }));
store.dispatch(bugAdded({ description: "bug 03" }));
store.dispatch(bugRemoved({ id: 1 }));
// console.log(store.getState());
store.dispatch(bugResolved({ id: 2 }));

//not the best way to get data from store
// const unresolved = store
//   .getState()
//   .entities.bugs.filter((bug) => bug.resolved === false);

//better way to get data
const unresolvedX = getUnresolvedBugsSelector(store.getState());
const unresolvedY = getUnresolvedBugsSelector(store.getState());
//if state hasn't changed then get result from cache instead of computing it again

console.log(unresolvedX === unresolvedY); //return false, it should return true.
//in this case it will cause to re render componenets even when state hasn't changed
//we should get same output if the store state hasn't changed
//so we memorize the selectors

// console.log(unresolved);
