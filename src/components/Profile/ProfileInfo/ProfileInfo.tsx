import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import Yes from "../../../assets/images/yes.jpg";
import No from "../../../assets/images/no.jpg";
import {ProfileStatus} from "./ProfileStatus";



type ProfileInfoPropsType = {
    profile: ProfileType | undefined
    status: string
    updateUserStatus:(status: string) => void
}

function ProfileInfo(props:ProfileInfoPropsType) {
    if(!props.profile)
        return<Preloader/>
    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.img} src="https://klike.net/uploads/posts/2019-01/1547366815_1.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={s.discription}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status}
                               updateUserStatus={props.updateUserStatus}
                />
                <div>aboutMe: {props.profile.aboutMe}</div>
                <div>facebook: {props.profile.contacts.facebook}</div>
                <div >lookingForAJob: {props.profile.lookingForAJob
                    ?<img src={Yes} className={s.yes} />
                    :<img className={s.no} src={No}/>}</div>
            </div>

        </div>
    )
}

export default ProfileInfo;
