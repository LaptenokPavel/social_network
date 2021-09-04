import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

type HeaderType = {
    login: string
    isAuth: boolean

}

const Header = (props:HeaderType) => {
    return (
        <header className={s.header}>
            <img src="https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}
export default Header;