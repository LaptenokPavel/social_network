import {authAPI} from "../api/api";
import {AnyAction} from "redux";
import {AppStateType} from "./redux-store";

import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";


export type AuthType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}


export const initialState: AuthType = {
    id: '',
    email: '',
    login: '',
    isAuth: false
}

const authReducer = (state: AuthType = initialState, action: setUserData) => {
    switch (action.type) {
        case 'SET_USER-DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export type setUserData = ReturnType<typeof setUserData>

export type ThunkType = ThunkAction<void, AppStateType, unknown, AnyAction>

export const setUserData = (id: string, email: string, login: string, isAuth: boolean) => {
    return (
        {
            type: 'SET_USER-DATA',
            payload: {id, email, login, isAuth}
        } as const
    )
}
export const getUserData = (): ThunkType => {
    return (dispatch) => {
      return authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login, isAuth} = response.data.data;
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0]: 'some error'
                    dispatch(stopSubmit('login', {email: message}))
                }
            })
    }
}

export const logout = (): ThunkType => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData('', '', '', false))
            }
        })
    }
}

export default authReducer;