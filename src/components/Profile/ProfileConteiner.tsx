import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";

type ProfileConteinerType = {
    setUserProfile:(profile: ProfileType) => void
    profile: ProfileType | undefined
}

class ProfileConteiner extends React.Component<ProfileConteinerType> {

 componentDidMount() {
     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

let mapStateToProps = (state:AppStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileConteiner);

// {...this.props}