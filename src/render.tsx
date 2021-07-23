import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, RootStateType, updateNewMessage, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessage={updateNewMessage}
            />
    </BrowserRouter>,
    document.getElementById('root'));
}