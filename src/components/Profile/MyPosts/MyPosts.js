import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {

  let posts = props.profilePage.posts.map(p => <Post message={p.postText} key={p.id}/>)

  const onSubmit = (formData) => {
    console.log(formData.body);
    props.addPost(formData.body);
  }

  return (
    <div className={s.my_posts}>
      <div className={s.submit_post}>
        <div className={s.submit_post_title}>My posts</div>
        <div className={s.submit_post_form}>
          <TextareaReduxForm onSubmit={onSubmit}/>
        </div>
      </div>
      {posts}
    </div>
  )
})

const maxLength10 = maxLengthCreator(10)

function TextareaForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={'body'} component={Textarea} validate={[required, maxLength10]}/>
      <button>Опубликовать</button>
    </form>
  )
}

const TextareaReduxForm = reduxForm({form: `myPostsForm`})(TextareaForm)

export default MyPosts