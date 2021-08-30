export type PostsType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | undefined
}

export type ProfileType = {

    "aboutMe": string
    "contacts": {
        "facebook": string
        "website": string
        "vk": string
        "twitter": string
        "instagram": string
        "youtube": string
        "github": string
        "mainLink": string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": string
    "photos": {
        "small": string
        "large": string
    }

}

export type ProfileActionsTypes = updateNewPostText | addPost | setUserProfile


export const unitialStateProfilePage: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, How are you?", likes: 15},
        {id: 2, message: "It's my first post!", likes: 20},
    ],
    newPostText: "it-kamasutra",
    profile: undefined
}

const profileReducer = (state: ProfilePageType = unitialStateProfilePage, action: ProfileActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case 'ADD-POST':
            let newPost: PostsType = {
                id: 3,
                message: state.newPostText,
                likes: 0,
            }
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: 'it-kamasutra'
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export type addPost = ReturnType<typeof addMyPostActionCreator>
export type updateNewPostText = ReturnType<typeof newPostTextActionCreator>
export type setUserProfile = ReturnType<typeof setUserProfile>

export const addMyPostActionCreator = () => {
    return (
        {
            type: 'ADD-POST'
        } as const
    )
}
export const newPostTextActionCreator = (post: string) => {
    return (
        {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: post
        } as const
    )
}
export const setUserProfile = (profile: ProfileType) => {
    return (
        {
            type: 'SET-USER-PROFILE',
            profile: profile
        } as const
    )
}

export default profileReducer;