import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css';
import {SateBarPage} from "../../redux/state";

type SateBar = {
    valueSateBar:SateBarPage[]
}




const Nav: React.FC<SateBar> = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'}activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'}activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'}activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.satebar}`}>
                <NavLink to={'/satebar'}activeClassName={s.activeLink}>SateBar</NavLink>
                <h3>Friends</h3>

<div className={s.friend}>
    {(props.valueSateBar).map((v)=>(<div>
            <div className={s.avatar}></div>
            <div className={s.nik}>{v.name}</div>
        </div>
        ))}
    </div>
            </div>
        </nav>
    )
}
export default Nav;
