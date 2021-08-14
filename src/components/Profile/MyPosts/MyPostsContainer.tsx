import React from "react";
import {addMyPostActionCreator, newPostTextActionCreator, PostsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    valuePosts: Array<PostsType>
    newMessage: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (post: string) => void
}


let mapStateToProps = (state: AppStateType):
    MapStateToPropsType => {
    return {
        valuePosts: state.profilePage.posts,
        newMessage: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addMyPostActionCreator())
        },
        updateNewPostText: (post: string) => {
            dispatch(newPostTextActionCreator(post))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
