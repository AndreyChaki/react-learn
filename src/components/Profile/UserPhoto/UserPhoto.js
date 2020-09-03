import React from "react";
import s from './UserPhoto.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../images/user-default.png'

function UserPhoto(props) {

  if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0])
    }
  }

  return (
    <div className={s.profile_img}>
      <img src={props.profile.photos.large || userPhoto} alt=""/>
      {props.isOwner && <div>
        <input type="file" onChange={onMainPhotoSelected}/>
      </div>
      }
    </div>
  )
}

export default UserPhoto