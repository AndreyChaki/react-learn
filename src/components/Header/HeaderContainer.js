import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <div className={s.header_content}>
        <div className={s.logo} />
        <div className={s.login_block}>
          <NavLink to={'/login'}>Log in</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header