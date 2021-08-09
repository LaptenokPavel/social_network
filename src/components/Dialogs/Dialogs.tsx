import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogsItem/DialogItems";
import {Message} from "./Message/Message";
import {
    DialogsType, MessagesDataType,
} from "../../redux/store";


type DialogsProps = {
    valueDialogs: DialogsType[]
    valueMessages: Array<MessagesDataType>
    newMessage: string
    addMessage: () => void
    uppdateNewMessage: (message: string) => void
};


function Dialogs(props: DialogsProps) {

    let dialogsDataElement = (props.valueDialogs).map((d) => (<DialogItems name={d.name} id={d.id}/>));
    let messagesDataElement = (props.valueMessages).map((m) => (<Message message={m.message} id={m.id}/>));


    const onAddMessage = () => {
        props.addMessage()
    }

    const newMessageText = (newMessage: ChangeEvent<HTMLTextAreaElement>) => {
        let message = newMessage.currentTarget.value
        props.uppdateNewMessage(message)
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
                <div><textarea onChange={newMessageText} value={props.newMessage}/></div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;


