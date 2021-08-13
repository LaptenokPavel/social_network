import React from "react";

import {addMyPostActionCreator, newPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


function MyPostsContainer(props: any) {
    let state = props.store.getState().profilePage

    const addPost = () => {
        props.store.dispatch(addMyPostActionCreator())
    }
    const newPostText = (post: string) => {
        props.store.dispatch(newPostTextActionCreator(post))
    }


    return (
        <MyPosts updateNewPostText={newPostText}
                 addPost={addPost}
                 valuePosts={state.posts}
                 newMessage={state.newPostText}
        />
    )
}

export default MyPostsContainer;
