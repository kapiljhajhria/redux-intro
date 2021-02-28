import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "../store/reducer";
import logger from "./middelware/logger";
import toast from "./middelware/toast";
import api from "./middelware/api";

export default function () {
  return configureStore({
    reducer: reducer,

    middleware: [...getDefaultMiddleware(), logger("console"), toast, api],
  });
}
