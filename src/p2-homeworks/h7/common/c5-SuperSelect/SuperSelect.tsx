import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'
import styled from "styled-components";


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
            /*selected={restProps.value === o}*/
                       value={o}
                       style={{background: '#EEF4FF'}}
        >{o}
        </option>
    }) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption

    }

    return (<div>
            <select
                className={s.superSelect}
                onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
            <StyledCompSelect>
            </StyledCompSelect>
        </div>
    )
}
let StyledCompSelect = styled.div`
  width: 100px;
  height: 10px;
  background-color: white;
`
export default SuperSelect
