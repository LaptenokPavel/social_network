import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
    title: string
}
const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://klike.net/uploads/posts/2019-01/1547366815_1.jpg" alt=""/>
            </div>
            <div>
                Ava + discription
            </div>
            <MyPosts title={""}/>
        </div>
    )
}
export default Profile;
