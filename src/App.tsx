import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import News from "./components/NavBar/News/News";
import Music from "./components/NavBar/Music/Music";
import Settings from "./components/NavBar/Settings/Settings";
import SateBar from "./components/SateBar/SateBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className={"app-wrapper-content"}>
                <Route path='/profile/:userId?' render={() => <ProfileConteiner/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/satebar' component={SateBar}/>
            </div>
        </div>
    );
}

export default App;
