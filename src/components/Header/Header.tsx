import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

type HeaderType = {
    login: string
    isAuth: boolean
    logout: ()=>void
}

const Header = (props:HeaderType) => {
    return (
        <header className={s.header}>
            <img src="https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}
export default Header;