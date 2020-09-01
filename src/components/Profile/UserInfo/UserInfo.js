import React from "react";
import s from './MyInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

function MyInfo(props) {

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

export default MyInfo