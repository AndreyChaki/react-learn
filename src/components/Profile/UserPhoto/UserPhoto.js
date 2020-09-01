import React from "react";
import s from './UserInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

function UserInfo(props) {

  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.about}>
      <div>{props.profile.fullName}</div>
      <div>{props.profile.aboutMe}</div>

    </div>
  )
}

export default UserInfo