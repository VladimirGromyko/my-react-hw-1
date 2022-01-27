import {UsersType} from "../../HW8";
import {sortPayloadType} from "../homeWorkReducer";

export const humanSort =(state: UsersType, preloader: sortPayloadType):UsersType => {
    let newState = [...state].sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
    if (preloader===sortPayloadType.up) {
        return newState
    } else
        return newState.reverse()
}