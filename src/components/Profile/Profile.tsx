import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {storeType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileProps = {
    store:storeType
}

function Profile(props: ProfileProps) {
    return (
        <div>
            <ProfileInfo title={""}/>
            <MyPostsContainer store={props.store}
            />

        </div>
    )
}

export default Profile;
