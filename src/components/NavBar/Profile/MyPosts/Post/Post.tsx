import React from "react";
import s from './Post.module.css';


type PostPropsType = {
    message: string
    likes: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (

                <div className={s.item}>
                    <img src="https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg" alt=""/>
                    {props.message}
                <div><span>{'likes'} {props.likes}</span></div>
                </div>

         )
}
export default Post;
