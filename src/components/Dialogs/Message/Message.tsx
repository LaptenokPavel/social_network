import s from "../Dialogs.module.css";
import React from "react";

type MessagesDataType = {
    id: number
    message: string
};


export function Message(props: MessagesDataType){


    return (
            <div className={s.message}>{props.message}</div>
    )
};