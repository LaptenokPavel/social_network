import {ActionsTypes, DialogsPageType, MessagesDataType} from "./store";


export const unitialStateDialogsPage:DialogsPageType = {
    dialogs: [
        {id: 1, name: "Pasha"},
        {id: 2, name: "Dimych"},
        {id: 3, name: "Victor"},
        {id: 4, name: "Valera"},
        {id: 5, name: "Tanja"},
        {id: 6, name: "Luba"},
    ],

    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your It-incubator?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ],
    newMessage: "",
}

const dialogsReducer = (state: DialogsPageType = unitialStateDialogsPage, action: ActionsTypes) => {
    switch (action.type) {
        case'UPDATE-NEW-MESSAGE':
            state.newMessage = action.newMessage
            return state
        case 'ADD-MESSAGE':
            let message: MessagesDataType = {
                id: 1,
                message: action.newMessage
            }
            state.messagesData.push(message)
            state.newMessage = ''
            return state
        default:
            return state
    }
}
export type addMessage = ReturnType<typeof addPostActionCreator>
export type updateNewMessage = ReturnType<typeof newMessageTextActionCreator>

export const addPostActionCreator = (newMessage: string) => {
    return (
        {
            type: "ADD-MESSAGE",
            newMessage: newMessage
        } as const
    )
}
export const newMessageTextActionCreator = (message: string) => {
    return (
        {
            type: 'UPDATE-NEW-MESSAGE',
            newMessage: message
        } as const
    )
}

export default dialogsReducer;
