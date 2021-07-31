
export type PostsType = {
    id: number
    message: string
    likes: number
};


export type DialogsType = {
    id: number
    name: string

};

export type MessagesDataType = {
    id: number
    message: string
};

export type SateBarPage = {
    id: number
    avatar: string
    name: string
};


export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
};

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messagesData: Array<MessagesDataType>
    newMessage: string
};


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sateBar: SateBarPage[]
}




export type storeType = {
    _state: RootStateType
    updateNewMessage: (newMessage: string) => void
    addMessage:(newMessage: string) => void
    updateNewPostText:(newText: string) => void
    addPost:() => void
    _onChange:() => void
    subscribe:(observer: () => void) => void
    getState:() => RootStateType
}

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, How are you?", likes: 15},
                {id: 2, message: "It's my first post!", likes: 20},
            ],
            newPostText: "it-kamasutra",
        },
        dialogsPage: {
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
        },

        sateBar: [
            {id: 1, avatar: "picture", name: "Dimych"},
            {id: 2, avatar: "picture", name: "Victor"},
            {id: 3, avatar: "picture", name: "Valera"},

        ]
    },

    updateNewMessage(newMessage: string) {
        this._state.dialogsPage.newMessage = newMessage
        this._onChange()
    },
    addMessage(newMessage: string) {
        let message: MessagesDataType = {
            id: 1,
            message: newMessage
        }
        this._state.dialogsPage.messagesData.push(message)
        this._state.dialogsPage.newMessage = ''
        this._onChange()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    addPost() {
        let newPost: PostsType = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likes: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._onChange()
    },
    _onChange() {
        console.log('hello')
    },
    subscribe(observer: () => void) {
        this._onChange = observer
    },
    getState() {
        return(this._state)
    }
}

export default store;