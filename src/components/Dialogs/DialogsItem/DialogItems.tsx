import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsType = {
    id: number
    name: string

};

export function DialogItems(props: DialogsType) {
    return (
        <div className={s.dialog}>
            <div>
                <img className={s.avatar}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97y0vOoHF6QOVvgXHfJQUXd6YJnwl0TNDAQ&usqp=CAU"
                     alt=""/>
            </div>
            <div>
                <NavLink to={'/dialogs/' + props.id}>{props.name} </NavLink>
            </div>
        </div>
    )
};