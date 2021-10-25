import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import Yes from "../../../assets/images/yes.jpg";
import No from "../../../assets/images/no.jpg";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from "../../../assets/images/withoutAvatar.jpg";



type ProfileInfoPropsType = {
    profile: ProfileType | undefined
    status: string
    updateUserStatus:(status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

function ProfileInfo(props:ProfileInfoPropsType) {
    if(!props.profile)
        return<Preloader/>

    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.img} src="https://klike.net/uploads/posts/2019-01/1547366815_1.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={s.discription}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
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
