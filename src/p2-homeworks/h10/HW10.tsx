import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from "../h10/_loader/loader07.module.css"
import style from "../h10/HW10.module.css"

function HW10() {
    const dispatch = useDispatch()
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{dispatch(loadingAC(false))},3000)
    };

    return (
        <div>
            <hr/>
            <h3>homeworks 10</h3>

            <div className={style.isLoading}>
                {isLoading
                    ? (
                        <div className={s.loader07}>Loading...</div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading</SuperButton>
                        </div>
                    )
                }
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
