const logger = (param) => (store) => (next) => (action) => {
  console.log("params:", param);
  //   console.log("store:", store);
  //   console.log("next:", next);
  //   console.log("action:", action);
  next(action);
};
export default logger;
