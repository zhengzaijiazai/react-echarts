import { configureStore, Reducer } from "@reduxjs/toolkit";
import countReducer from "./countReducers";
import countReducer1 from "./countReducersSlice";

const store = configureStore({
    reducer: {
        count: countReducer as Reducer,
        count1: countReducer1
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store