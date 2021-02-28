const toast = (store) => (next) => (action) => {
  // console.log("type of action", action.type);
  if (action.type === "error") {
    console.log("Toastify:", action.payload.message);
  } else next(action);
};
export default toast;
