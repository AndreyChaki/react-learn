import React from "react";
import s from './MessageItem.module.css'

function MessageItem(props) {
  return (
    <div className={s.message}>
      {props.messageText}
    </div>
  )
}

export default MessageItem