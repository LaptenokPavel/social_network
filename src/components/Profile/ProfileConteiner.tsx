import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";



type PathParamType = {
    userId: string
    }

type PropsType = RouteComponentProps<PathParamType> & ProfileConteinerType


type ProfileConteinerType = mapStateProfileConteinerType  & mapSDispatchProfileConteinerType

   type mapStateProfileConteinerType = {
    profile: ProfileType | undefined
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
          }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps,  {getUserProfile}),withRouter, withAuthRedirect)(ProfileConteiner)
