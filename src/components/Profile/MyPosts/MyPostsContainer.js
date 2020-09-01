import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC, taPostChangeAC} from "../../../redux/profile-reducer";

function MyPosts(props) {


  let posts = props.state.posts.map(p => <Post message={p.postText} key={p.id} />)

  let addPostTextarea = React.createRef()

  let addPost = () => {
    props.dispatch(addPostAC())
  }

  let taChange = () => {
    props.dispatch(taPostChangeAC(addPostTextarea.current.value))
  }

  return (
    <div className={s.my_posts}>
      <div className={s.submit_post}>
        <div className={s.submit_post_title}>My posts</div>
        <div className={s.submit_post_form}>
          <textarea onChange={taChange} value={props.state.taText} ref={addPostTextarea}/>
          <button onClick={addPost}>Опубликовать</button>
        </div>
      </div>
      {posts}
    </div>
  )
}

export default MyPosts