import React from "react";
import s from './UserItem.module.css'
import userPhoto from '../../../images/user-default.png'
import {NavLink} from "react-router-dom";

function UserItem(props) {

  return (
    <div className={s.urer_item}>
      <div>
        <div className={s.user_photo}>
          <NavLink to={`/profile/` + props.id}>
            <img src={props.photos.small ? props.photos.small : userPhoto} alt=""/>
          </NavLink>
        </div>
        <div className={s.user_follow_button}>
          {props.followed
            ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                      onClick={() => {
                        props.unfollow(props.id)
                      }}>Отписаться</button>
            : <button disabled={props.followingInProgress.some(id => id === props.id)}
                      onClick={() => {
                        props.follow(props.id)
                      }}>Подписаться</button>}
        </div>
      </div>
      <div>
        <div>
          {props.name}
        </div>
        <div>
          {props.status}
        </div>
      </div>
    </div>
  )
}

export default UserItem