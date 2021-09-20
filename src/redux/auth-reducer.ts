import {authAPI} from "../api/api";
import {Dispatch} from "redux";


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
               ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export type setUserData = ReturnType<typeof setUserData>


export const setUserData = (id:string, email:string, login:string) => {
    return (
        {
            type: 'SET_USER-DATA',
            data: {id, email, login}
        } as const
    )
}
export const getUserData = () => {
       return (dispatch:Dispatch) => {
        authAPI.me().then(response => {
            if(response.data.resultCode ===0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login))
            }
        })
    }
}


export default authReducer;