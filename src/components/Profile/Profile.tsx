import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostsType, ProfilePageType, RootStateType} from "../../redux/state";

type ProfileProps ={
    valuePosts: Array<PostsType>
    addPost:(postMessage:string)=>void
}
function Profile (props:ProfileProps){
    return (
       <div>
           <ProfileInfo title={""}/>
            <MyPosts valuePosts={props.valuePosts }
                     addPost={props.addPost}/>
        </div>
    )
}
export default Profile;
