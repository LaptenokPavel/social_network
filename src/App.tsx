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
import {storeType} from './redux/store'
import SateBar from "./components/SateBar/SateBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type app = {
    store: storeType
}


function App(props: app) {

    return (
        <div className="app-wrapper">
            <Header title={""}/>
            <NavBar valueSateBar={props.store.getState().sateBar}/>
            <div className={"app-wrapper-content"}>
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/satebar' component={SateBar}/>
            </div>
        </div>
    );
}

export default App;
