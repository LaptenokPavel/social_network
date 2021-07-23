import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogsItem/DialogItems";
import {Message} from "./Message/Message";
import {DialogsType, MessagesDataType} from "../../redux/state";


type DialogsProps = {
    valueDialogs: Array<DialogsType>
    valueMessages: Array<MessagesDataType>
    addMessage: (newMessage: string) => void
    updateNewMessage: (newMessage: string) => void
    newMessage: string
};

function Dialogs(props: DialogsProps) {

    let dialogsDataElement = (props.valueDialogs).map((d) => (<DialogItems name={d.name} id={d.id}/>));
    let messagesDataElement = (props.valueMessages).map((m) => (<Message message={m.message} id={m.id}/>));


    const addPost = () => {
        props.addMessage(props.newMessage)
       }

    const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
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


