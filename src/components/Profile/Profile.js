import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserPhoto from "./UserPhoto/UserPhoto";

function Profile({profile, status, updateStatus, isOwner, updatePhoto}) {

  return (
    <div className={s.profile_wrap}>
      <div>
        <div className="page_block p20">
          <UserPhoto updatePhoto={updatePhoto} isOwner={isOwner} profile={profile}/>
        </div>
      </div>
      <div>
        <div className="page_block p20">
          <UserInfo profile={profile}
                    isOwner={isOwner}
                    status={status}
                    updateStatus={updateStatus}
          />
        </div>
        <div className="page_block p20">
          <MyPostsContainer/>
        </div>
      </div>
    </div>
  )
}

export default Profile