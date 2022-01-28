import React, {useCallback, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h9/HW9.module.css'

const Clock = () => {

    const formatDate = (date: Date) => {

        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0')
        let yyyy = date.getFullYear();

        // let dd = date.getDate().toString();
        // if (date.getDate() < 10) dd = '0' + dd
        //
        // let mm = (date.getMonth() + 1).toString();
        // if ((date.getMonth() + 1) < 10) mm = '0' + mm;
        //
        // let yy = date.getFullYear().toString() //% 100;
        // //if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yyyy;
    }

    let initialDate = () => new Date()
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(initialDate())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(initialDate())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }

    const onMouseLeave = () => {
        setShow(false)
    }
    let stringTime = date.toLocaleTimeString()
    const stringDate = date && date.toLocaleDateString()//formatDate(date)//'Date' // fix with date

    return (
        <div>
            <div className={s.currentDate}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            <div className={s.currentDate}>
                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>
            <div className={s.buttonBlock}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}


export default Clock
