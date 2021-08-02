import {ActionsTypes, DialogsPageType, MessagesDataType} from "./state";
import React from "react";


const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    if (action.type === 'UPDATE-NEW-MESSAGE') {
        state.newMessage = action.newMessage
    } else if (action.type === 'ADD-MESSAGE') {
        let message: MessagesDataType = {
            id: 1,
            message: action.newMessage
        }
        state.messagesData.push(message)
        state.newMessage = ''
    }
    return state
}
export type addMessage = ReturnType<typeof addPostActionCreator>
export type updateNewMessage = ReturnType<typeof newMessageTextActionCreator>

export const addPostActionCreator = (newMessage: string) => {
    return (
        {
            type: "ADD-MESSAGE",
            newMessage: newMessage
        } as const
    )
}
export const newMessageTextActionCreator = (message: string) => {
    return (
        {
            type: 'UPDATE-NEW-MESSAGE',
            newMessage: message
        } as const
    )
}

export default dialogsReducer;
