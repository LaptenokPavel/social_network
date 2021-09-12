import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";



type PathParamType = {
    userId: string
    }

type PropsType = RouteComponentProps<PathParamType> & ProfileConteinerType


type ProfileConteinerType = mapStateProfileConteinerType  & mapSDispatchProfileConteinerType

   type mapStateProfileConteinerType = {
    profile: ProfileType | undefined
       isAuth: boolean
}

type mapSDispatchProfileConteinerType = {
    getUserProfile:(userId: string) => void
}

class ProfileConteiner extends React.Component<PropsType> {


 componentDidMount() {
     let userId = this.props.match.params.userId

if(!userId){
    userId = '2'
}
    this.props.getUserProfile(userId)
 }

    render() {

        if(!this.props.isAuth){
            return(
                <Redirect to={'/login'}/>
            )
        }

        return (
            <Profile
            profile={this.props.profile}
            />
        )
    }
}

let mapStateToProps = (state:AppStateType):mapStateProfileConteinerType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileConteiner)

export default connect(mapStateToProps,  {getUserProfile})(WithUrlDataContainerComponent);

// {...this.props}