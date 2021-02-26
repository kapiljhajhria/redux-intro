function createStore() {
  let state; //private variable

  function getState() {
    return state;
  }

  return {
    getState,
  };
}

export default createStore();
