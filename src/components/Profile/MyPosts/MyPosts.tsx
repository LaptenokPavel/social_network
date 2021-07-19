import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType, ProfilePageType, RootStateType} from "../../../redux/state";


type MyPostsPageType = {
    valuePosts: Array<PostsType>
    addPost:(postMessage:string)=>void
}

function MyPosts(props: MyPostsPageType) {

    let postsDataElement = (props.valuePosts).map((p) =>
        (<Post id={p.id} message={p.message} likes={p.likes}/>));

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        let text = newPostElement.current ? newPostElement.current.value : ''
        props.addPost(text)
        {
            if (newPostElement.current) {
                newPostElement.current.value = ''
            }
        }
    }
    return (

        <div className={s.post}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
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
