import React from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogsItem/DialogItems";
import {Message} from "./Message/Message";
import {AppPropsType} from "../../App";
import {dialogs, messagesData} from "../../index";

type DialogsPropsType = {
    valueDialogs: Array<dialogs>
    valueMessages: Array<messagesData>
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsDataElement = (props.valueDialogs).map((d) => (<DialogItems name={d.name} id={d.id}/>))
    let messagesDataElement = (props.valueMessages).map((m) => (<Message message={m.message} id={m.id}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsDataElement}
            </div>
            <div className={s.messages}>
                {messagesDataElement}
            </div>
        </div>
    )
};

export default Dialogs;


