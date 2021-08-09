import React from 'react';
import {storeType,} from "../../redux/store";
import {addPostActionCreator, newMessageTextActionCreator} from "../../redux/dialogs-reducer";
import MyPosts from "../Profile/MyPosts/MyPosts";


type DialogsContainerProps = {
    store: storeType
};

function Dialogs(props: DialogsContainerProps) {
    let state = props.store.getState().dialogsPage


    const addPost = () => {
        props.store.dispatch(addPostActionCreator(state.newMessage))
    }
    const newMessageText = (message: string) => {
        props.store.dispatch(newMessageTextActionCreator(message))
    }

    return (
        <MyPosts valueDialogs={state.dialogs}
                 valueMessages={state.messagesData}
                 newMessage={state.newMessage}
                 addMessage={addPost}
                 uppdateNewMessage={newMessageText}


        />
    )
};

export default Dialogs;


