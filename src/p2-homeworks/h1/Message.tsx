import React from 'react'
import s from './Message.module.css'
import corner from './corner.jpg'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img className={s.photo} src={props.avatar} alt={''}/>
            </div>
            <div className={s.textMessage}>
                <div className={s.corner}><img src={corner} alt={''}/></div>
                <div className={s.text}>
                    <div>
                        <div className={s.name}>{props.name}</div>
                        <div>{props.message}</div>
                    </div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
