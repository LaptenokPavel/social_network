import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile, getUserStatus, ProfileType, savePhoto, updateUserStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

type PathParamType = {
    userId: string
    status: string

}

type PropsType = RouteComponentProps<PathParamType> & ProfileConteinerType


type ProfileConteinerType = mapStateProfileConteinerType & mapSDispatchProfileConteinerType

type mapStateProfileConteinerType = {
    profile: ProfileType | undefined
    status: string,
    authorizedUserId: string
    isAuth: boolean

}


type mapSDispatchProfileConteinerType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: any) => void
}

class ProfileConteiner extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId)
            this.refreshProfile()
    }

    render() {
        return (
            <Profile
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
            />
        )
    }
}


let mapStateToProps = (state: any): mapStateProfileConteinerType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}), withRouter)(ProfileConteiner)
