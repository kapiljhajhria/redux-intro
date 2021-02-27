import { configureStore } from "@reduxjs/toolkit";
import reducer from "../store/reducer";

export default function () {
  return configureStore({
    reducer: reducer,
  });
}
