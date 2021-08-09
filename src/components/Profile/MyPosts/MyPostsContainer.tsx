import React from "react";
import {storeType} from "../../../redux/store";
import {addMyPostActionCreator, newPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostsPageType = {
    store: storeType
}

function MyPostsContainer(props: MyPostsPageType) {
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
