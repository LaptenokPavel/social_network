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

type app ={
    appState: RootStateType
}

function App(props: app) {
        return (
            <div className="app-wrapper">
                <Header title={""}/>
                <NavBar title={""}/>
                <div className={"app-wrapper-content"}>
                    <Route path='/profile' render={() => <Profile valuePosts={props.appState.profilePage.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs valueDialogs={props.appState.dialogsPage.dialogs}
                                                                  valueMessages={props.appState.dialogsPage.messagesData}/>}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
}

export default App;
