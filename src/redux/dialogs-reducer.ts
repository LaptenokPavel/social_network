export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messagesData: Array<MessagesDataType>
    newMessage: string
}

export type MessagesDataType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}
 type DialogsActionsTypes = updateNewMessage | addMessage

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

const dialogsReducer = (state: DialogsPageType = unitialStateDialogsPage, action: DialogsActionsTypes):DialogsPageType => {
    switch (action.type) {
        case'UPDATE-NEW-MESSAGE':
            state.newMessage = action.message
            return state
        case 'ADD-MESSAGE':
            let messageNew: MessagesDataType = {
                id: 1,
                message: state.newMessage
            }
            state.messagesData.push(messageNew)

            return state
        default:
            return state
    }
}
export type addMessage = ReturnType<typeof addPostActionCreator>
export type updateNewMessage = ReturnType<typeof newMessageTextActionCreator>

export const addPostActionCreator = () => {
    return (
        {
            type: "ADD-MESSAGE",
                   } as const
    )
}
export const newMessageTextActionCreator = (message: string) => {
    return (
        {
            type: 'UPDATE-NEW-MESSAGE',
            message: message
        } as const
    )
}

export default dialogsReducer;
