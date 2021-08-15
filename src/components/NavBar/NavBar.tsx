import React from "react";
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css';
import {AppStateType} from "../../redux/redux-store";
import {SateBarPage} from "../../redux/satebar-reducer";


const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'} activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.satebar}`}>
                <NavLink to={'/satebar'} activeClassName={s.activeLink}>SateBar</NavLink>
                <h3>Friends</h3>

                {/*<div className={s.friend}>*/}
                {/*    {state.sateBar.map((v) => (<div>*/}
                {/*            <div className={s.avatar}></div>*/}
                {/*            <div className={s.nik}>{v.name}</div>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </nav>
    )
}
export default NavBar;
