// 枚举类型 统一管理
export enum ActionType {
    ADD_EVENT = 'ADD_EVENT',
    REMOVE_EVENT = 'REMOVE_EVENT',
    UPDATE_EVENT = 'UPDATE_EVENT',
}

interface baseAction {
    payload?: unknown
}

// 类型接口  
export interface AddAction extends baseAction {
    // typeof方便后续直接修改枚举类型就可以了,这里就不用修改了
    type: typeof ActionType.ADD_EVENT;
}
export interface RemoveAction extends baseAction {
    type: typeof ActionType.REMOVE_EVENT;
}
export interface UpdateAction extends baseAction {
    type: typeof ActionType.UPDATE_EVENT;
}
// 类型接口统一导出
export type CounterAction = AddAction | UpdateAction | RemoveAction;

// state类型
export interface CountState {
    count: number;
}