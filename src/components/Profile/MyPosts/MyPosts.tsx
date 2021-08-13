import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";

type MyPostsPageType = {
    valuePosts: Array<PostsType>
    newMessage: string
    updateNewPostText: (post: string) => void
    addPost: () => void
}

function MyPosts(props: MyPostsPageType) {

    let postsDataElement = (props.valuePosts).map((p) =>
        (<Post id={p.id} message={p.message} likes={p.likes}/>));


    const onAddPost = () => {
        props.addPost()
    }

    const newPostText = (newPost: ChangeEvent<HTMLTextAreaElement>) => {
        let post = newPost.currentTarget.value
        props.updateNewPostText(post)
    }


    return (
        <div className={s.post}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={newPostText} value={props.newMessage}/></div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>New post</div>
            <div className={s.postr}>
                {postsDataElement}
            </div>
        </div>
    )

}

export default MyPosts;
