import { ActionType, CounterAction, CountState } from "./type"

const initState: CountState = {
    count: 0
}
const countReducer = (state = initState, action: CounterAction): CountState => {
    switch (action.type) {
        case ActionType.ADD_EVENT:
            return { ...state, count: action.payload as number };
        case ActionType.REMOVE_EVENT:
            return { ...state, count: action.payload as number };
        case ActionType.UPDATE_EVENT:
            return { ...state, count: state.count * 2 };
        default:
            return state;
    }
}

export default countReducer