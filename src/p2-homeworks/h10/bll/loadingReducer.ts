const initState = {
isLoading: false
}
export type LoadingStateType = typeof initState

export const loadingReducer = (state = initState, action: LoadingACType): LoadingStateType => { // fix any
    switch (action.type) {
        case "CHANGE-LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading:boolean) => ({type: 'CHANGE-LOADING', isLoading} as const) // fix any

export type LoadingACType = ReturnType<typeof loadingAC>