export type PostsType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type ProfileActionsTypes =  updateNewPostText | addPost


export const unitialStateProfilePage:ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, How are you?", likes: 15},
        {id: 2, message: "It's my first post!", likes: 20},
    ],
    newPostText: "it-kamasutra"
}

const profileReducer = (state: ProfilePageType  = unitialStateProfilePage, action: ProfileActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        case 'ADD-POST':
        let newPost: PostsType = {
            id: 3,
            message: state.newPostText,
            likes: 0,
        }
        state.posts.push(newPost)
        state.newPostText = ''
            return state
        default:return state
    }
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