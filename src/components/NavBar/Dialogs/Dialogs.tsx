import React from 'react';
import s from './Dialogs.module.css'

type DialogsPropsType = {
    title: string
}

const Dialogs: React.FC<DialogsPropsType> = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>

                <div className={` ${s.dialog} ${s.active}`}>
                    Pasha
                </div>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Valera
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