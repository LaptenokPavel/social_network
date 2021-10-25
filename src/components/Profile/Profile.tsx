import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType | undefined
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>

        </div>
    )
}

export default Profile;
