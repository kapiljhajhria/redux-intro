import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

//creating slice - combining action and reducor using redux-toolkit
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    //actions=>action handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;

//specific store should handle all queries related to that store
//Selector
//not the best way to create queries/Selectors as
// its output changes even if the store state hasn't changed
// export const getUnresolvedBugsSelector = (state) =>
//   state.entities.bugs.filter((bug) => bug.resolved === false);

//uisng reselct library to create Selectors, not the output is cached
// and same output is returned if the store state hasn't changed
export const getUnresolvedBugsSelector = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved) //if state and projects remain unchanged then this logic won't be recalculated again
);
