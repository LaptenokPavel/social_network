import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostsType} from "../../../redux/state";


type MyPostsPageType = {
    valuePosts: Array<PostsType>
    newMessage: string
    dispatch: (action:ActionsTypes) => void
}

function MyPosts(props: MyPostsPageType) {

    let postsDataElement = (props.valuePosts).map((p) =>
        (<Post id={p.id} message={p.message} likes={p.likes}/>));

    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

        let newPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText:e.currentTarget.value})
        }


        return (
            <div className={s.post}>
                <h3>My posts</h3>
                <div>
                    <div><textarea onChange={newPostText} value={props.newMessage}/></div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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
