import {UsersType} from "../HW8";
import {humanSort} from "./utils/humanSort";

export enum sortPayloadType {
    "up" = 0,
    "down" = 1,
}

type  sortType = {
    type: 'sort', payload: sortPayloadType
}
type  checkType = {
    type: 'check'
    payload: number
}
export type homeWorkReducerActionType = sortType | checkType

// need to fix any
export const homeWorkReducer = (state: UsersType, action: homeWorkReducerActionType): UsersType => {

    switch (action.type) {
        case 'sort': {
            return humanSort(state, action.payload)
        }
        case 'check': {
            return state.filter((el) => el.age >= action.payload)
        }
        default:
            return state
    }
}