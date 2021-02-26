import reducer from "./reducer";
function createStore(reducer) {
  let state; //private variable

  function dispatch(action) {
    //call reducer to get new state
    state = reducer(state, action); //currentState and action as parameter

    //Notify subscriber
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
  };
}

export default createStore(reducer);
