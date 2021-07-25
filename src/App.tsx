import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import News from "./components/NavBar/News/News";
import Music from "./components/NavBar/Music/Music";
import Settings from "./components/NavBar/Settings/Settings";
import {RootStateType} from './redux/state'
import SateBar from "./components/SateBar/SateBar";

type app = {
    appState: RootStateType
    addPost: (newText: string) => void
    updateNewPostText: (newText: string) => void
    addMessage:(newMessage: string) => void
    updateNewMessage:(newMessage: string) => void
}

function App(props: app) {
    return (
        <div className="app-wrapper">
            <Header title={""}/>
            <NavBar valueSateBar={props.appState.sateBar}/>
            <div className={"app-wrapper-content"}>
                <Route path='/profile' render={() => <Profile valuePosts={props.appState.profilePage.posts}
                                                              newMessage={props.appState.profilePage.newPostText}
                                                              addPost={props.addPost}
                                                              updateNewPostText={props.updateNewPostText}
                />
                }
                />
                <Route path='/dialogs' render={() => <Dialogs valueDialogs={props.appState.dialogsPage.dialogs}
                                                              valueMessages={props.appState.dialogsPage.messagesData}
                                                              newMessage={props.appState.dialogsPage.newMessage}
                                                              addMessage={props.addMessage}
                                                              updateNewMessage={props.updateNewMessage}
                />}
                />
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/satebar' component={SateBar}/>
            </div>
        </div>
    );
}

export default App;
