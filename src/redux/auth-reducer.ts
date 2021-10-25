import {authAPI, securityAPI} from "../api/api";
import {AnyAction} from "redux";
import {AppStateType} from "./redux-store";

import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";


export type AuthType = {
    id: string
    email: string
    login: string
    isAuth: boolean
    captchaUrl: string
}


export const initialState: AuthType = {
    id: '',
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: ''
}

const authReducer = (state: AuthType = initialState, action: setUserData | getCaptchaUrlSucess) => {
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
export type getCaptchaUrlSucess = ReturnType<typeof getCaptchaUrlSucess>

export type ThunkType = ThunkAction<void, AppStateType, unknown, AnyAction>

export const setUserData = (id: string, email: string, login: string, isAuth: boolean) => {
    return (
        {
            type: 'SET_USER-DATA',
            payload: {id, email, login, isAuth}
        } as const
    )
}
export const getCaptchaUrlSucess = (captchaUrl: string) => {
    return (
        {
            type: 'GET-CAPTCHA-URL-SUCESS',
            captchaUrl
        } as const
    )
}


export const getUserData = (): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login, isAuth} = response.data.data;
            dispatch(setUserData(id, email, login, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {email: message}))
    }
}

export const getCaptchaUrl = (): ThunkType => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSucess(captchaUrl))
    }
}

export const logout = (): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData('', '', '', false))
        }
    }
}

export default authReducer;