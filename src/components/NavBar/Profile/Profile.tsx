import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    title: string
}
const Profile = (props: ProfilePropsType) => {
    return (
       <div>
           <ProfileInfo title={""}/>
            <MyPosts title={""}/>
        </div>
    )
}
export default Profile;
