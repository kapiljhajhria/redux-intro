import axios from "axios";
import * as actions from "../api";
// const action = {
//   actiontype: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     method: "get",
//     data: {},
//     onSuccess: "bugsRecieved",
//     onError: "apiRequestFailed",
//   },
// };

//above action is for demo purpose only

const api = (store) => (next) => async (action) => {
  console.log("action type is", action.type);
  if (action.type !== actions.apiCallBegan.type) {
    next(action);
    return;
  }
  const { url, method, data, onSuccess, onError, onStart } = action.payload;

  if (onStart) store.dispatch({ type: onStart }); //for laoding indicator
  next(action);

  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api",
      url: url,
      method: method,
      data: data,
    });
    //general success action
    store.dispatch(actions.apiCallSuccess(response.data));
    //specific resposne action if its mentioned
    console.log("onSuccess value is", onSuccess);
    if (onSuccess) store.dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    //dispatch general error action as it will probably be same for most classes
    store.dispatch(actions.apiCallFailed(error));

    //for specific scenarios we can dispatch custom action
    if (onError) store.dispatch({ type: onError, payload: error });
  }
};

export default api;
