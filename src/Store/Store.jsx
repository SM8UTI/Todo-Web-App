import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Slice/TodoSlice";

const Store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});

export default Store;
