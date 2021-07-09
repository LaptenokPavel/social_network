import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {posts} from "../../../index";
import {ProfilePropsType} from "../Profile";

const MyPosts = (props: ProfilePropsType) => {

      let postsDataElement = (props.value).map((p)=>(<Post id={p.id} message={p.message} likes={p.likes} />))

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
                {postsDataElement}
            </div>
        </div>

    )
}
export default MyPosts;
