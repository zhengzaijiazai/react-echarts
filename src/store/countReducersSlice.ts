import { createSlice } from "@reduxjs/toolkit";
import { CountState } from "./type"

const initState: CountState = {
    count: 0
}
// 创建reducer
export const countReducerSlice = createSlice({
    name: "countSlice",
    initialState: initState,
    reducers: {
        add1(state, payload) {
            console.log("state", state);
            console.log("payload", payload);
            state.count += payload.payload;
        },
        remove1(state, payload) {
            console.log(state);
            console.log(payload);
            state.count -= payload.payload;
        },
        update1(state, payload) {
            console.log(state);
            console.log(payload);
            state.count *= payload.payload;
        }
    }
})
// 暴露action
export const { add1, remove1, update1 } = countReducerSlice.actions
// 暴露reducer
export default countReducerSlice.reducer