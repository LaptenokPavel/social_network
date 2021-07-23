import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType, ProfilePageType, RootStateType} from "../../../redux/state";


type MyPostsPageType = {
    valuePosts: Array<PostsType>
    newMessage: string
    addPost:(newText: string)=>void
    updateNewPostText: (newText: string) => void
}

function MyPosts(props: MyPostsPageType) {

    let postsDataElement = (props.valuePosts).map((p) =>
        (<Post id={p.id} message={p.message} likes={p.likes}/>));

    const addPost = () => {
               props.addPost(props.newMessage)
          }


    let newPostText = (e:ChangeEvent<HTMLTextAreaElement>)=>{props.updateNewPostText(e.currentTarget.value)}


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
