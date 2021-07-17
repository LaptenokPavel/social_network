import React from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogsItem/DialogItems";
import {Message} from "./Message/Message";
import {DialogsType, MessagesDataType} from "../../redux/state";


type DialogsProps = {
    valueDialogs: Array<DialogsType>
    valueMessages: Array<MessagesDataType>
};


function Dialogs(props: DialogsProps) {

    let dialogsDataElement = (props.valueDialogs).map((d) => (<DialogItems name={d.name} id={d.id}/>));
    let messagesDataElement = (props.valueMessages).map((m) => (<Message message={m.message} id={m.id}/>));
    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessage = ()=>{
        alert(newMessageElement.current?.value)
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
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;


