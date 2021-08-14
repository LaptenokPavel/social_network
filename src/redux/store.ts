import {addMessage, updateNewMessage} from "./dialogs-reducer";
import  {addPost, updateNewPostText} from "./profile-reducer";


type PostsType = {
    id: number
    message: string
    likes: number
};

type DialogsType = {
    id: number
    name: string
};

type MessagesDataType = {
    id: number
    message: string
};

type SateBarPage = {
    id: number
    avatar: string
    name: string
};

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
};

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messagesData: Array<MessagesDataType>
    newMessage: string
};


type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sateBar: SateBarPage[]
}


type ActionsTypes = updateNewMessage | addMessage | updateNewPostText | addPost

type storeType = {
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
       //this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        //this._state.profilePage = profileReducer(this._state.profilePage, action)
       //this._state.sateBar = sateBarReducer(this._state.sateBar, action)
        this._onChange()
     }


}





