import s from "../Dialogs.module.css";
import React from "react";
import {messagesData} from "../../../index";


export const Message = (props: messagesData) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};