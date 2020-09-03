import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, Form} from 'react-final-form'
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {

  let posts = props.profilePage.posts.map(p => <Post message={p.postText} key={p.id}/>)

  const onSubmit = (formData) => {
    props.addPost(formData.body);
  }


  return (
    <div className={s.my_posts}>
      <div className={s.submit_post}>
        <div className={s.submit_post_title}>My posts</div>
        <div className={s.submit_post_form}>

          <Form onSubmit={onSubmit}>
            {({handleSubmit, value}) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="body"
                  component={Textarea}
                />
                <button type="submit">Опубликовать</button>
              </form>
            )}
          </Form>


        </div>
      </div>
      {posts}
    </div>
  )
})


export default MyPosts