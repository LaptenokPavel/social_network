import {getUserData} from "./auth-reducer";
import {AnyAction, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


export type AppReducerType = {
    initialized: boolean
}


const initialState: AppReducerType = {
    initialized: false
}

const appReducer = (state: AppReducerType = initialState, action: initializedSucessType) => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export type initializedSucessType = ReturnType<typeof initializedSucess>


export const initializedSucess = () => ({type: 'SET_INITIALIZED'}) as const



export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getUserData())
        promise.then(() => {
            dispatch(initializedSucess())
        })
    }
}


export default appReducer;