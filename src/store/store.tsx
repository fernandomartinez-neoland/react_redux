import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter.component";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
