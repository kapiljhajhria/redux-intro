import { createAction } from "@reduxjs/toolkit";

// const bugUpdated = createAction("bugUpdated");
// console.log(bugUpdated(1));

// //action types

// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

// Action creators

// export function bugAdded(descriptiopn) {
//   return {
//     type: BUG_ADDED,
//     payload: { description: descriptiopn },
//   };
// }
export const bugAdded = createAction("bugAdded");

// export function bugRemoved(id) {
//   return {
//     type: BUG_REMOVED,
//     payload: { id: id },
//   };
// }
export const bugRemoved = createAction("bugRemoved");

// export function bugResolved(id) {
//   return {
//     type: BUG_RESOLVED,
//     payload: { id: id },
//   };
// }
export const bugResolved = createAction("bugResolved");

//reducer

let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type: {
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    }
    case bugRemoved.type: {
      return [...state.filter((bug) => bug.id !== action.payload.id)];
    }

    case bugResolved.type: {
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    }
    default:
      return state;
  }
}
