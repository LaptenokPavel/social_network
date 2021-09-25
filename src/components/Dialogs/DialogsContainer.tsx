import React from 'react';
import {
    addPostActionCreator, DialogsType, MessagesDataType
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    valueDialogs: DialogsType[]
    valueMessages: MessagesDataType[]

}

type MapDispatchToPropsType = {
    addMessage: (newMessageBody: string) => void

}

let mapStateToProps = (state: AppStateType):
    MapStateToPropsType => {
    return {
        valueDialogs: state.dialogsPage.dialogs,
        valueMessages: state.dialogsPage.messagesData,
            }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessageBody: string) => {
            dispatch(addPostActionCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)


