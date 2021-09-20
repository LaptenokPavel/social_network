import {profileAPI, usersAPI} from "../api/api";


export type PostsType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | undefined
    status: string
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

export type ProfileActionsTypes = updateNewPostText | addPost | setUserProfile | setUserStatus


export const unitialStateProfilePage: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, How are you?", likes: 15},
        {id: 2, message: "It's my first post!", likes: 20},
    ],
    newPostText: "it-kamasutra",
    profile: undefined,
    status: ''
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
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: 'it-kamasutra'
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }

        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}


export type addPost = ReturnType<typeof addMyPostActionCreator>
export type updateNewPostText = ReturnType<typeof newPostTextActionCreator>
export type setUserProfile = ReturnType<typeof setUserProfile>
export type setUserStatus = ReturnType<typeof setUserStatus>

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
export const setUserStatus = (status: string) => {
    return (
        {
            type: 'SET-STATUS',
            status: status
        } as const
    )
}


export const getUserProfile = (userId: string) => {
    return (dispatch: any) => (
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    )
}

export const getUserStatus = (userId: string) => {
    return (dispatch: any) => (
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))
        })
    )
}

export const updateUserStatus = (status: string) => {
    return (dispatch: any) => (
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0)
            dispatch(setUserStatus(status))
        })
    )
}

export default profileReducer;