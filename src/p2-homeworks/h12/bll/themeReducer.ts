import {ThemesNameType} from "../HW12";



export type stateThemeType = {
    themesName: ThemesNameType
}
const initState: stateThemeType = {
    themesName: 'some'
};


export const themeReducer = (state: stateThemeType = initState,
                             action: changeThemeACType): stateThemeType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, themesName: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme:ThemesNameType) => ({
    type: 'CHANGE-THEME', theme
} as const);
type changeThemeACType = ReturnType<typeof changeThemeAC>