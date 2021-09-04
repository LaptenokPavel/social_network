import React from "react";
import {render} from "react-dom";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerType = {
    setUserData:(id:string, email:string, login:string)=>void
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode ===0) {
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login)
            }
                            }
        )
    }

    render() {
        return (
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}
            />
        )
    }
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default  connect(mapStateToProps, {setUserData}) (HeaderContainer);