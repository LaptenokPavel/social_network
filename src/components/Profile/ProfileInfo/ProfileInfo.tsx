import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";



type ProfileInfoPropsType = {
    profile: ProfileType | undefined
}

function ProfileInfo(props:ProfileInfoPropsType) {
    if(!props.profile)
        return<Preloader/>
    return (
        <div>
            <div>
                <img className={s.img} src="https://klike.net/uploads/posts/2019-01/1547366815_1.jpg" alt=""/>
            </div>
            <div className={s.discription}>
                <img src={props.profile.photos.large}/>
                <div>aboutMe: {props.profile.aboutMe}</div>

            </div>

        </div>
    )
}

export default ProfileInfo;
