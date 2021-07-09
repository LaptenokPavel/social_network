import React from "react";
import s from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {posts} from "../../index";
import MyPosts from "./MyPosts/MyPosts";

export type ProfilePropsType  = {
    value:Array<posts>
};

const Profile = (props:ProfilePropsType) => {
    return (
       <div>
           <ProfileInfo title={""}/>
            <MyPosts value={props.value}/>
        </div>
    )
}
export default Profile;
