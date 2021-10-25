import React from "react";
import {addMyPostActionCreator,  PostsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    valuePosts: Array<PostsType>
    }

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}


let mapStateToProps = (state: any):
    MapStateToPropsType => {
    return {
        valuePosts: state.profilePage.posts,
           }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addMyPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
