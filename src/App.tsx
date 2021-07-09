import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/NavBar/News/News";
import Music from "./components/NavBar/Music/Music";
import Settings from "./components/NavBar/Settings/Settings";
import {dialogs, messagesData, posts} from "./index";

export type AppPropsType = {
    value: Array<posts>
    valueDialogs: Array<dialogs>
        valueMessages: Array<messagesData>
}
//some comment

const App = (props: AppPropsType) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header title={""}/>
                <NavBar title={""}/>
                <div className={"app-wrapper-content"}>
                    <Route path='/profile' render={() => <Profile value={props.value}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs valueDialogs={props.valueDialogs}
                                                                  valueMessages={props.valueMessages}/>}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
