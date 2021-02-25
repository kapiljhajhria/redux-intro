import * as actions from "./actionTypes";

export function bugAdded(descriptiopn) {
  return {
    type: actions.BUG_ADDED,
    payload: { description: descriptiopn },
  };
}

export function bugRemoved(id) {
  return {
    type: actions.BUG_REMOVED,
    payload: { id: id },
  };
}

export function bugResolved(id) {
  return {
    type: actions.BUG_RESOLVED,
    payload: { id: id },
  };
}
