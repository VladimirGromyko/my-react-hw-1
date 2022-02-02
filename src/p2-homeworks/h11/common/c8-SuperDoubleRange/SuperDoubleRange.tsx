import React, {DetailedHTMLProps, InputHTMLAttributes, useCallback} from 'react'
// import s from "../c7-SuperRange/SuperRange.module.css";
import {Box, Slider} from "@mui/material";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChange1?: (value: number) => void,
    value1?: number,
    onChangeRange2?: (value: number[]) => void,
    valueRange2: number[],
    min?: number,
    max?: number,
    step?: number,
    // min, max, step, disable, ...
}
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = React.memo((
    {
        onChange1, value1,
        onChangeRange2, value, valueRange2,
        min, max, step, onChange,
        type, className, ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = useCallback((e: Event, newValue: number | number[]) => {
        let value = newValue as number[]
        onChange1 && onChange1(value[0])
        onChangeRange2 && onChangeRange2(value)
    }, [onChange1, onChangeRange2])

    return (
        <Box bgcolor={'whitesmoke'}>
            <Slider
                value={valueRange2}
                onChange={onChangeCallback}
                color="secondary"
            />
        </Box>
    );
})

export default SuperDoubleRange
