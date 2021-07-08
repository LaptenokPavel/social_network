import React from "react";
import s from './ProfileInfo.module.css';


type ProfileInfoPropsType = {
    title: string
}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div >
            <div>
                <img className={s.img} src="https://klike.net/uploads/posts/2019-01/1547366815_1.jpg" alt=""/>
            </div>
            <div className={s.discription}>
                Ava + discription
            </div>

        </div>
    )
}
export default ProfileInfo;
