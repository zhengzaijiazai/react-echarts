import { CounterAction, ActionType } from './type'
// 函数返回dispatch里面的action类型 供tsx文件直接调佣
export const add = (...a: number[]): CounterAction => ({
    //函数体
    type: ActionType.ADD_EVENT,
    payload: a
})
export const remove = (...a: number[]): CounterAction => ({
    //函数体
    type: ActionType.REMOVE_EVENT,
    payload: a
})
export const update = (): CounterAction => ({
    //函数体
    type: ActionType.UPDATE_EVENT,
})