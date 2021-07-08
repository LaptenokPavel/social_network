import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogsPropsType = {
    title: string
};

type PropsDialogItems = {
    id: number
    name: string
};


const DialogItems = (props:PropsDialogItems) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name} </NavLink>
        </div>
    )
};

type PropsMessage = {

    message: string
};


 const Message = (props:PropsMessage) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

export const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <DialogItems name={"Pasha"} id={1}/>
                <DialogItems name={"Dimych"} id={2}/>
                <DialogItems name={"Victor"} id={3}/>
                <DialogItems name={"Valera"} id={4}/>
                <DialogItems name={"Tanja"} id={5}/>
                <DialogItems name={"Luba"} id={6}/>
            </div>

            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your It-incubator?"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    )
};




