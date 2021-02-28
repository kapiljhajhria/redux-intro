import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

//creating slice - combining action and reducor using redux-toolkit
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    //actions=>action handlers
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      // bugs.lastFetch = new Date();
    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list.splice(index, 1);
    },
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
    bugRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
  },
});

export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugRequestFailed,
} = slice.actions;
export default slice.reducer;

//Actions Creators

const url = "/bug";
export const loadBugs = () => {
  return apiCallBegan({
    url: url,
    // method: "get",
    // data: {},
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type, //or slice.actions.bugsReceived.type
    onError: bugRequestFailed.type,
  });
};

//specific store should handle all queries related to that store
//Selector
//not the best way to create queries/Selectors as
// its output changes even if the store state hasn't changed
// export const getUnresolvedBugsSelector = (state) =>
//   state.entities.bugs.list.filter((bug) => bug.resolved === false);

//uisng reselct library to create Selectors, not the output is cached
// and same output is returned if the store state hasn't changed
export const getUnresolvedBugsSelector = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.list.filter((bug) => !bug.resolved) //if state and projects remain unchanged then this logic won't be recalculated again
);

export const getBugsByUserSelector = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (state) => state.entities.projects,
    (bugs, projects) => bugs.list.filter((bug) => bug.userId === userId) //if state and projects remain unchanged then this logic won't be recalculated again
  );
