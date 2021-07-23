import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostsType, ProfilePageType, RootStateType} from "../../redux/state";

type ProfileProps ={
    valuePosts: Array<PostsType>
    newMessage: string
    addPost:(newText: string)=>void
    updateNewPostText: (newText: string) => void
}
function Profile (props:ProfileProps){
    return (
       <div>
           <ProfileInfo title={""}/>
            <MyPosts valuePosts={props.valuePosts }
                     newMessage={props.newMessage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />

        </div>
    )
}
export default Profile;
