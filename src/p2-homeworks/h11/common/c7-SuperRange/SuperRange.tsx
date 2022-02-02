import React, {DetailedHTMLProps, InputHTMLAttributes, useCallback} from 'react'
import {Box, Slider} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChange1?: (value: number) => void
    value1?: number
    onChangeRange2?: (value: number[]) => void
    valueRange2: number[]
};

const SuperRange: React.FC<SuperRangePropsType> = React.memo( (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChange1, value1,
        className, onChangeRange2, valueRange2,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = useCallback((e: Event, value: number | number[]) => {
        //onChange && onChange(e) // сохраняем старую функциональность
        onChange1 && onChange1(value as number);
        onChangeRange2 && onChangeRange2([value as number, valueRange2[1]])

    },[onChange1, onChangeRange2, valueRange2])

    return (
        <>
            <Box bgcolor={'whitesmoke'}>
                <Slider
                    value={value1}
                    aria-label="Small"
                    color="secondary"
                    onChange={onChangeCallback}
                />
            </Box>

            {/*<input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />*/}
        </>
    )
})

export default SuperRange
