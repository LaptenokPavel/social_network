import React from 'react';
import {
    addPostActionCreator, DialogsPageType, DialogsType, MessagesDataType,
    newMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    valueDialogs: DialogsType[]
    valueMessages: MessagesDataType[]
    newMessage: string
}

type MapDispatchToPropsType = {
    addMessage: () => void
    uppdateNewMessage: (message: string) => void
}

let mapStateToProps = (state: DialogsPageType): MapStateToPropsType => {
    return {
        valueDialogs: state.dialogs,
        valueMessages: state.messagesData,
        newMessage: state.newMessage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addPostActionCreator())
        },
        uppdateNewMessage: (message: string) => {
            dispatch(newMessageTextActionCreator(message))
        }
    }
}

const Dialogscontainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default Dialogscontainer;


