const { lastIndexOf } = require("lodash");

export default function reducer(state = [], action) {
  if (action.type === "BUG_ADDED") {
    let lastId = state.length === 0 ? 0 : state[state.length - 1].id;
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === "BUG_REMOVED") {
    return [...state.filter((bug) => bug.id !== action.payload.id)];
  }

  //   switch (action.type) {
  //     case "BUG_ADDED": {
  //       const lastId = state[state.length - 1].id;
  //       return [
  //         ...state,
  //         {
  //           id: ++lastId,
  //           description: action.payload.description,
  //           resolved: false,
  //         },
  //       ];
  //     }
  //     case "BUG_REMOVED": {
  //       return [...state.filter((bug) => bug.id !== action.payload.id)];
  //     }
  //     default:
  //       return state;
  //   }

  return state;
}
