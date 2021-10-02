import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {

    const inputClass = (error !== '') ? s.error : s.someClass // need to fix with (?:)
    return (
        <div className={s.hw3}>
            <div><input value={name} onChange={setNameCallback}
                        onKeyPress={onKeyPressHandler}
                        className={inputClass}
                        onBlur={setNameCallback}/>
            </div>
            <div>
                <button onClick={addUser} disabled={name.trim() === ''}>add</button>
            </div>
            <div><span>{totalUsers}</span></div>
            <div><span className={s.message}>{error}</span></div>
        </div>
    )
}

export default Greeting
