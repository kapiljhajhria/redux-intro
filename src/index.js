import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

const usubscribe = store.subscribe(() => {
  console.log("state changed", store.getState());
});

// // console.log(store.getState());
store.dispatch(projectAdded({ name: "Porject 02" }));
store.dispatch(actions.bugAdded({ description: "bug 01" }));
// console.log(store.getState());
// usubscribe();
store.dispatch(actions.bugAdded({ description: "bug 02" }));
store.dispatch(actions.bugAdded({ description: "bug 03" }));
store.dispatch(actions.bugRemoved({ id: 1 }));
// console.log(store.getState());
store.dispatch(actions.bugResolved({ id: 2 }));
store.dispatch(actions.projectAdded({ name: "Porject 01" }));
