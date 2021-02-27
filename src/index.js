import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugsSelector,
  bugAssignedToUser,
  getBugsByUserSelector,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

// const usubscribe = store.subscribe(() => {
//   console.log("state changed", store.getState());
// });

//in order to pass function as a paramter we used custom middleware called func here
//without func middleware we will get error
store.dispatch((dispatch, getState) => {
  //call an api
  //when promise is resolved =>dispatch()
  dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
  console.log(getState());
  //if proise is rejected =>dispatch()
});
store.dispatch({
  type: "error",
  payload: { message: "An error has occured" },
});

store.dispatch(userAdded({ name: "kapil" }));
// store.dispatch(projectAdded({ name: "Porject 02" }));
// store.dispatch(bugAdded({ description: "bug 01" }));
// store.dispatch(bugAdded({ description: "bug 02" }));
// store.dispatch(bugAdded({ description: "bug 03" }));
// store.dispatch(bugAssignedToUser({ userId: 1, bugId: 2 }));
// store.dispatch(bugRemoved({ id: 1 }));
// store.dispatch(bugResolved({ id: 2 }));

// console.log(getUnresolvedBugsSelector(store.getState()));
// console.log(getBugsByUserSelector(1)(store.getState()));
