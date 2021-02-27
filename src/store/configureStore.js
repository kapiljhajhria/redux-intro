import { configureStore } from "@reduxjs/toolkit";
import reducer from "../store/reducer";
import logger from "./middelware/logger";
export default function () {
  return configureStore({
    reducer: reducer,
    middleware: [logger("console")],
  });
}
