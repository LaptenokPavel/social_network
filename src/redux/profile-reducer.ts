import {profileAPI, usersAPI} from "../api/api";


export type PostsType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
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

export type ProfileActionsTypes = addPost | setUserProfile | setUserStatus | setPhotoSuccess


export const unitialStateProfilePage: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, How are you?", likes: 15},
        {id: 2, message: "It's my first post!", likes: 20},
    ],
    profile: undefined,
    status: ''
}

const profileReducer = (state: ProfilePageType = unitialStateProfilePage, action: ProfileActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: 3,
                message: action.newPostText,
                likes: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
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
        case 'SET-PHOTO-SUCCESS':
            return {
                ...state,
                profile: {...state.profile, photos:action.photos}
            }
        default:
            return state
    }
}


export type addPost = ReturnType<typeof addMyPostActionCreator>
export type setUserProfile = ReturnType<typeof setUserProfile>
export type setUserStatus = ReturnType<typeof setUserStatus>
export type setPhotoSuccess = ReturnType<typeof setPhotoSuccess>

export const addMyPostActionCreator = (newPostText: string) => {
    return (
        {
            type: 'ADD-POST',
            newPostText: newPostText
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
export const setPhotoSuccess = (photos: any) => {
    return (
        {
            type: 'SET-PHOTO-SUCCESS',
            photos
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
            if (response.data.resultCode === 0)
                dispatch(setUserStatus(status))
        })
    )
}

export const savePhoto = (file: any) => {
    return async (dispatch: any) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0)
            dispatch(setPhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;