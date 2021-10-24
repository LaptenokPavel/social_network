import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import News from "./components/NavBar/News/News";
import Music from "./components/NavBar/Music/Music";
import Settings from "./components/NavBar/Settings/Settings";
import SateBar from "./components/SateBar/SateBar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import ProfileConteiner from "./components/Profile/ProfileConteiner";


type AppType = {
    initializeApp: () => void
    initialized: boolean
}

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));


class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path='/profile/:userId?' render={() => <ProfileConteiner/>}/>
                    <Route path='/dialogs' render={() => {
                        return <React.Suspense fallback={<div>Загрузка...</div>}>
                            <DialogsContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/satebar' component={SateBar}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);