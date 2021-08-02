import {ActionsTypes, PostsType, ProfilePageType,} from "./state";
import React from "react";


const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText
    } else if (action.type === 'ADD-POST') {
        let newPost: PostsType = {
            id: 3,
            message: state.newPostText,
            likes: 0,
        }
        state.posts.push(newPost)
        state.newPostText = ''
    }
    return state
}

export type addPost = ReturnType<typeof addMyPostActionCreator>
export type updateNewPostText = ReturnType<typeof newPostTextActionCreator>

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

export default profileReducer;