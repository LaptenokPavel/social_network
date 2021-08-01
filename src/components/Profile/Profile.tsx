import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ActionsTypes, PostsType} from "../../redux/state";

type ProfileProps = {
    valuePosts: Array<PostsType>
    newMessage: string
    dispatch: (action:ActionsTypes) => void
}

function Profile(props: ProfileProps) {
    return (
        <div>
            <ProfileInfo title={""}/>
            <MyPosts valuePosts={props.valuePosts}
                     newMessage={props.newMessage}
                     dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile;
