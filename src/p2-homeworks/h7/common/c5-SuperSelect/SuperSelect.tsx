import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    // const mappedOptions: any[] = []; // map options with key
    const mappedOptions: any[] = options ? options.map((o, i) => {
        return <option key={restProps.name + '-' + i}
                       selected={restProps.value === o}>{o}
        </option>
    }) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        debugger
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
            // onChange, onChangeOption
        }
    }

    return (
        <select
            className={s.superSelect}
            onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
