export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messagesData: Array<MessagesDataType>

}

export type MessagesDataType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}


export const unitialStateDialogsPage: DialogsPageType = {
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
}

const dialogsReducer = (state: DialogsPageType = unitialStateDialogsPage, action: addMessage): DialogsPageType => {
    switch (action.type) {
             case 'ADD-MESSAGE':
            let messageNew: MessagesDataType = {
                id: 6,
                message: action.newMessageBody
            }
            return {
                ...state,
                messagesData: [...state.messagesData, messageNew],
            }
        default:
            return state
    }
}
export type addMessage = ReturnType<typeof addPostActionCreator>


export const addPostActionCreator = (newMessageBody: string) => {
    return (
        {
            type: "ADD-MESSAGE",
            newMessageBody: newMessageBody
        } as const
    )
}


export default dialogsReducer;
