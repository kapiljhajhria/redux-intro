import { createAction, createReducer } from "@reduxjs/toolkit";

//actiontype and action using redux toolkit

export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

//reducer

let lastId = 0;

export default createReducer([], {
  //key value pairs
  //actions:function(event=>event handler)
  //using actions from created action.type to avoid issue when changing names
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugResolved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
  [bugRemoved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state.splice(index, 1);
  },
});
