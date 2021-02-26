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
  bugAdded: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  bugResolved: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
  bugRemoved: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state.splice(index, 1);
  },
});

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type: {
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     }
//     case bugRemoved.type: {
//       return [...state.filter((bug) => bug.id !== action.payload.id)];
//     }

//     case bugResolved.type: {
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );
//     }
//     default:
//       return state;
//   }
// }
