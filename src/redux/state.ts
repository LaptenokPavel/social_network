import {ChangeEvent} from "react";

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

type updateNewMessage = {
    type: 'UPDATE-NEW-MESSAGE'
    newMessage: string
}
type addMessage = {
    type: 'ADD-MESSAGE'
    newMessage: string
}
type updateNewPostText = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type addPost = {
    type: 'ADD-POST'
}

export type ActionsTypes = updateNewMessage | addMessage | updateNewPostText | addPost

export type storeType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
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
    _onChange() {
        console.log('hello')
    },
    subscribe(observer: () => void) {
        this._onChange = observer
    },
    getState() {
        return (this._state)
    },
    dispatch(action) {
        if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessage = action.newMessage
            this._onChange()
        } else if (action.type === 'ADD-MESSAGE') {
            let message: MessagesDataType = {
                id: 1,
                message: action.newMessage
            }
            this._state.dialogsPage.messagesData.push(message)
            this._state.dialogsPage.newMessage = ''
            this._onChange()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        } else if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likes: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        }
    },

}


export const addPostActionCreator = (newMessage: string): addMessage => {
    return (
        {
            type: "ADD-MESSAGE",
            newMessage: newMessage
        }
    )
}
export const newMessageTextActionCreator = (message: string): updateNewMessage => {
    return (
        {
            type: 'UPDATE-NEW-MESSAGE',
            newMessage: message
        }
    )
}
export const addMyPostActionCreator = (): addPost => {
    return (
        {
            type: 'ADD-POST'
        }
    )
}
export const newPostTextActionCreator = (post: string): updateNewPostText => {
    return (
        {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: post
        }
    )
}

export default store;