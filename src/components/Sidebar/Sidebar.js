import React from "react";
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar'>
      <nav className={s.menu}>
        <div className={s.item}>
          <NavLink to='/'>Моя страница</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' activeClassName={s.active}>Сообщения</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/users' activeClassName={s.active}>Пользователи</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' activeClassName={s.active}>Настройки</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar