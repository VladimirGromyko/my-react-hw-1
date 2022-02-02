import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from '../h11/HW11.module.css'

export type initialValueType = [number, number]


function HW11() {

    const [value1, setValue1] = useState<number>(15)
    const [value2, setValue2] = useState<number[]>([15, 44])

    // сделать так чтоб value1 и value2 изменялось
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.slider}>
                <div className={s.sliderData}>{value1}</div>
                <div className={s.sliderBox}>
                    <SuperRange
                        onChange1={setValue1}
                        onChangeRange2={setValue2}
                        value1={value1}
                        valueRange2={value2}

                        // сделать так чтоб value1 изменялось
                    />
                </div>
                <div className={s.sliderData}></div>
            </div>

            <div className={s.slider}>
                <div className={s.sliderData}>{value1}</div>
                <div className={s.sliderBox}>
                    <SuperDoubleRange
                        onChange1={setValue1}
                        value1={value1}
                        onChangeRange2={setValue2}
                        valueRange2={value2}
                    />
                </div>
                <div className={s.sliderData}>{value2[1]}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
