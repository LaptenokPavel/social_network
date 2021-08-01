import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogsItem/DialogItems";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsType, MessagesDataType} from "../../redux/state";


type DialogsProps = {
    valueDialogs: Array<DialogsType>
    valueMessages: Array<MessagesDataType>
    dispatch: (action:ActionsTypes) => void
    newMessage: string
};

function Dialogs(props: DialogsProps) {

    let dialogsDataElement = (props.valueDialogs).map((d) => (<DialogItems name={d.name} id={d.id}/>));
    let messagesDataElement = (props.valueMessages).map((m) => (<Message message={m.message} id={m.id}/>));


    const addPost = () => {
        props.dispatch({type:"ADD-MESSAGE", newMessage:props.newMessage})
       }

    const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:'UPDATE-NEW-MESSAGE', newMessage:e.currentTarget.value})
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsDataElement}
            </div>
            <div className={s.messages}>
                {messagesDataElement}
            </div>
            <div className={s.textarea}>
                <textarea onChange={newMessageText} value={props.newMessage}/>
                <button onClick={addPost}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;


