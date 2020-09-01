import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs() {
  return (
    <div className={s.dialogs_wrap}>
      <div className={s.dialogs_list}>
        <div className={s.dialog}>
          <NavLink to='/dialogs/1'>User 1</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>User 2</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>User 3</NavLink>
        </div>
      </div>
      <div className={s.messages_list}>
        <div className={s.message}>
          message 1
        </div>
        <div className={s.message}>
          message 2
        </div>
        <div className={s.message}>
          message 3
        </div>
      </div>
    </div>
  )
}

export default Dialogs