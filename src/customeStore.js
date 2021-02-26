import reducer from "./reducer";
function createStore(reducer) {
  let state; //private variable
  let listeners = [];

  //create subscribe function

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    //call reducer to get new state
    state = reducer(state, action); //currentState and action as parameter
    listeners.forEach((listener) => listener());

    //Notify subscriber
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore(reducer);
