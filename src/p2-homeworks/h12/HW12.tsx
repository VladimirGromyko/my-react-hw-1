import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, stateThemeType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

export const themes: ThemesNameType[] = ['dark', 'red', 'some'];
export type ThemesNameType = 'dark' | 'red' | 'some'

function HW12() {
    const theme = useSelector<AppStoreType, stateThemeType>(state => state.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: ThemesNameType) => {
        dispatch(changeThemeAC(theme))
    }

    return (

        <div className={s[theme.themesName]}>
            <hr/>
            <span className={s[theme.themesName + '-text']}>
                <h3>homeworks 12</h3>
                <h4>Themes of screen</h4>
            </span>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme.themesName}
                    onChangeOption={onChangeCallback}
                />
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
