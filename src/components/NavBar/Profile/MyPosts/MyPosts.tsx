import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type MyPostsPropsType = {
    title: string
}
const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    return (

        <div className={s.post}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>New post</div>
            <div className={s.postr}>
                <Post message={"Hi, How are you?"} likes={15}/>
                <Post message={"It's my first post!"} likes={20}/>
            </div>
        </div>

    )
}
export default MyPosts;
