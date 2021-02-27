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
const unresolved = getUnresolvedBugsSelector(store.getState());

console.log(unresolved);
