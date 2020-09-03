import React from "react";
import s from './UserInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

function UserInfo(props) {

  let profile = props.profile

  if (!profile) {
    return <Preloader/>
  }

  return (
    <div className={s.about}>
      <h2>{profile.fullName}</h2>

      <div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>

      <div>{profile.aboutMe}</div>
      <div>{profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</div>
      <div>{profile.lookingForAJob && profile.lookingForAJobDescription}</div>

      <div className={s.contact_block}>
        <h3>Контакты</h3>
        {
          Object.keys(profile.contacts).map(c => <Contacts key={c} contactTitle={c}
                                                           contactValue={profile.contacts[c]}/>)
        }
      </div>
    </div>
  )
}

const Contacts = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}:</b> {contactValue}</div>
}

export default UserInfo