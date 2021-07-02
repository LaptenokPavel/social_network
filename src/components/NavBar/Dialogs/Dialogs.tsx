import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
type DialogsPropsType = {
    title: string
}

const Dialogs: React.FC<DialogsPropsType> = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>

                <div className={` ${s.dialog} ${s.active}`}>
                    <NavLink to = '/dialogs/1'>Pasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to = '/dialogs/2'>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to = '/dialogs/3'>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to = '/dialogs/4'>Valera</NavLink>
                </div>


            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your It-incubator?</div>
                <div className={s.message}>Yo</div>

            </div>
        </div>
    )
}

export default Dialogs;