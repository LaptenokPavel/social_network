import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {dialogs} from "../../../index";


export const DialogItems = (props: dialogs) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name} </NavLink>
        </div>
    )
};