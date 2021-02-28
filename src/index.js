import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugsSelector,
  bugAssignedToUser,
  getBugsByUserSelector,
  loadBugs,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
import * as actions from "./store/api";

const store = configureStore();

// const usubscribe = store.subscribe(() => {
//   console.log("state changed", store.getState());
// });

//UI layer
store.dispatch(loadBugs());

// store.dispatch(
//   actions.apiCallBegan({
//     url: "/bugs",
//     // method: "get",
//     // data: {},
//     onSuccess: "bugs/bugsReceived",
//   })
// );

// store.dispatch(userAdded({ name: "kapil" }));

// store.dispatch(projectAdded({ name: "Porject 02" }));
// store.dispatch(bugAdded({ description: "bug 01" }));
// store.dispatch(bugAdded({ description: "bug 02" }));
// store.dispatch(bugAdded({ description: "bug 03" }));
// store.dispatch(bugAssignedToUser({ userId: 1, bugId: 2 }));
// store.dispatch(bugRemoved({ id: 1 }));
// store.dispatch(bugResolved({ id: 2 }));

// console.log(getUnresolvedBugsSelector(store.getState()));
// console.log(getBugsByUserSelector(1)(store.getState()));
