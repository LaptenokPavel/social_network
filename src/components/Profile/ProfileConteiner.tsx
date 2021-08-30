import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter } from "react-router-dom";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";


type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & ProfileConteinerType


type ProfileConteinerType = mapStateProfileConteinerType  & mapSDispatchProfileConteinerType

   type mapStateProfileConteinerType = {
    profile: ProfileType | undefined
}

type mapSDispatchProfileConteinerType = {
    setUserProfile:(profile: ProfileType) => void
}

class ProfileConteiner extends React.Component<PropsType> {


 componentDidMount() {
     let userId = this.props.match.params.userId

if(!userId){
    userId = '2'
}
     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
                          this.props.setUserProfile(response.data)
                   }
     )
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

let WithUrlDataContainerComponent = withRouter(ProfileConteiner)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);

// {...this.props}