import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type HeaderContainerType = {
    logout: ()=>void
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerType> {


    render() {
        return (
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}
                    logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
   })

export default  connect(mapStateToProps, {logout}) (HeaderContainer);