import React from 'react';
import {
    addPostActionCreator, DialogsPageType, DialogsType, MessagesDataType,
    newMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    valueDialogs: DialogsType[]
    valueMessages: MessagesDataType[]
    newMessage: string
}

type MapDispatchToPropsType = {
    addMessage: () => void
    uppdateNewMessage: (message: string) => void
}

let mapStateToProps = (state: AppStateType):
    MapStateToPropsType => {
    return {
        valueDialogs: state.dialogsPage.dialogs,
        valueMessages: state.dialogsPage.messagesData,
        newMessage: state.dialogsPage.newMessage,
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


