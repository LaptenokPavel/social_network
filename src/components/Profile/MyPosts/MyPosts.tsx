import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLenghtCreator, minLenghtCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostsPageType = {
    valuePosts: Array<PostsType>
           addPost: (newPostText:string) => void
}

type AddNewPostFormType = {
    newPostText:string
}

function MyPosts(props: MyPostsPageType) {

    let postsDataElement = (props.valuePosts).map((p) =>
        (<Post key={p.id} id={p.id} message={p.message} likes={p.likes}/>));


    const onAddPost = (values:AddNewPostFormType) => {
                props.addPost(values.newPostText)
    }

    return (
        <div className={s.post}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>New post</div>
            <div className={s.postr}>
                {postsDataElement}
            </div>
        </div>
    )

}

export let maxLength = maxLenghtCreator(30)
export let minLength = minLenghtCreator(2)

const AddNewPostForm = (props:InjectedFormProps<AddNewPostFormType>)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'}
                       validate={[requiredField, maxLength, minLength]}
                       placeholder={'hello'}
                      />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: 'postAddMessageForm'})(AddNewPostForm)

export default MyPosts;
