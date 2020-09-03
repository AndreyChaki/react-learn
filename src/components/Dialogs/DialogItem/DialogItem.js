import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

function DialogItem({id, name}) {
  return (
    <div className={s.dialog}>
      <NavLink to={'/dialogs/' + id}>{name}</NavLink>
    </div>
  )
}

export default DialogItem