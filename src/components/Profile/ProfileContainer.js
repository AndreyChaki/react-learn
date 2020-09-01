import React from "react";
import MyInfo from "./MyInfo/MyInfo";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
  return (
    <div className={s.profile_wrap}>
      <div>
        <div className="page_block p20">
          <div className={s.profile_img}>
            <img src="https://sun9-20.userapi.com/impf/c9837/u8069529/113006632/z_d6333bac.jpg?size=200x0&quality=90&crop=0,0,682,1024&sign=8ed0e943a27206cf82a8c5211435ae22&ava=1" alt=""/>
          </div>
        </div>
      </div>
      <div>
        <div className="page_block p20">
          <MyInfo />
        </div>
        <div className="page_block p20">
          <MyPostsContainer />
        </div>
      </div>
    </div>
  )
}

export default Profile