import React from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogsItem/DialogItems";
import {Message} from "./Message/Message";
import {DialogsType, MessagesDataType} from "../../redux/dialogs-reducer";
import {Field,  InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, minLenghtCreator, requiredField} from "../../utils/validators/validators";
import {maxLength, minLength} from "../Profile/MyPosts/MyPosts";


export type DialogsProps = {
    valueDialogs: Array<DialogsType>
    valueMessages: Array<MessagesDataType>
    newMessage: string
    addMessage: (newMessageBody: string) => void
  };

type AddMessageFormType = {
    newMessageBody: string
}

function Dialogs(props: DialogsProps) {
    let dialogsDataElement = (props.valueDialogs).map((d) => (<DialogItems key={d.id} name={d.name} id={d.id}/>));
    let messagesDataElement = (props.valueMessages).map((m) => (<Message key={m.id} message={m.message} id={m.id}/>));


    const addNewMessage = (values: AddMessageFormType) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsDataElement}
            </div>
            <div className={s.messages}>
                {messagesDataElement}
            </div>
            <div className={s.textarea}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};



const AddMessageForm = (props:InjectedFormProps<AddMessageFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[requiredField, maxLength, minLength]}
                       name={'newMessageBody'}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;


