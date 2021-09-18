import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateIsAuthType = {
    isAuth: boolean
}


let mapStateToPropsForRedirect = (state:AppStateType):mapStateIsAuthType => {
    return {isAuth: state.auth.isAuth}
}

export function withAuthRedirect <T>(Component: ComponentType<T>){

    function RedirectComponent(props: mapStateIsAuthType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) {
            return (<Redirect to={'/login'}/>)
        }
        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

return ConnectedAuthRedirectComponent

}