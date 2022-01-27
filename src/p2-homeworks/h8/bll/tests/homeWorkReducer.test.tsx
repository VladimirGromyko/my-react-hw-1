import React from 'react'
import {homeWorkReducer, sortPayloadType} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: sortPayloadType.up})
    console.log(newState)
    expect(newState[2].name).toBe('Дмитрий')
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: sortPayloadType.down})
    console.log(newState)
    expect(newState[1].name).toBe('Коля')
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    console.log(newState)
    expect(newState.length).toBe(4)

})
